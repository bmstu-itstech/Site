import os
import shutil
import sqlite3
import sys
from pathlib import Path

DEBUG = True
SQL_SELECT_PHOTOS = "SELECT photo FROM actions_photo"
SQL_SELECT_VIDEOS = "SELECT video FROM actions_action"
PATH_TO_MEDIA = Path(__file__).parent / 'media'
PATH_TO_DB = Path(__file__).parent / 'db.sqlite3'


def get_photos_from_db():
    con = sqlite3.connect(PATH_TO_DB)
    cur = con.cursor()
    videos = cur.execute(SQL_SELECT_PHOTOS)
    videos = tuple(map(lambda x: x[0], videos))
    cur.close()
    con.close()

    videos = set(filter(lambda x: x.split('/')[0:2] == ["actions", "photo"],
                        videos))

    return videos


def get_videos_from_db():
    con = sqlite3.connect(PATH_TO_DB)
    cur = con.cursor()
    photos = cur.execute(SQL_SELECT_VIDEOS)
    photos = tuple(map(lambda x: x[0], photos))
    cur.close()
    con.close()

    photos = set(filter(lambda x: x.split('/')[0:2] == ["actions", "video"],
                        photos))

    return photos


def remote_object_from_media(removed_objects):
    for obj in removed_objects:
        if DEBUG:
            shutil.move(PATH_TO_MEDIA / obj, PATH_TO_MEDIA / 'trash' / obj)
        else:
            os.remove(PATH_TO_MEDIA / obj)
        print(f"rm {obj}")


def remove_actions_images():
    actions_photo_path = PATH_TO_MEDIA / 'actions' / 'photo'
    if not actions_photo_path.is_dir():
        print(f"There is no \"{actions_photo_path}\"")

    saved_photos = set(filter(lambda x: (actions_photo_path / x).is_file(),
                              os.listdir(actions_photo_path)))
    saved_photos = set(map(lambda x: 'actions/photo/' + x, saved_photos))

    photos_from_db = get_photos_from_db()

    remote_object_from_media(saved_photos.difference(photos_from_db))


def remove_actions_videos():
    actions_video_path = PATH_TO_MEDIA / 'actions' / 'video'
    if not actions_video_path.is_dir():
        print(f"There is no \"{actions_video_path}\"")

    saved_videos = set(filter(lambda x: (actions_video_path / x).is_file(),
                              os.listdir(actions_video_path)))
    saved_videos = set(map(lambda x: 'actions/video/' + x, saved_videos))

    videos_from_db = get_videos_from_db()

    remote_object_from_media(saved_videos.difference(videos_from_db))


def main():
    global DEBUG

    if len(sys.argv) == 2 and sys.argv[1] == '--prod':
        DEBUG = False

    if DEBUG and not (PATH_TO_MEDIA / 'trash').is_dir():
        os.makedirs(PATH_TO_MEDIA / 'trash')
        os.makedirs(PATH_TO_MEDIA / 'trash' / 'actions')
        os.makedirs(PATH_TO_MEDIA / 'trash' / 'actions' / 'photo')
        os.makedirs(PATH_TO_MEDIA / 'trash' / 'actions' / 'video')

    if not PATH_TO_MEDIA.is_dir():
        print(f"There is no \"{PATH_TO_MEDIA}\"")
        return
    if not PATH_TO_DB.is_file():
        print(f"There is no \"{PATH_TO_DB}\"")
        return

    if DEBUG:
        print("\tDEBUG MODE")

    print("Removing actions images...")
    remove_actions_images()
    print("\nRemoving actions video...")
    remove_actions_videos()


if __name__ == '__main__':
    main()
