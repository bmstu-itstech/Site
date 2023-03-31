const videoInput = $(".field-video #id_video");
let videoWrapper = $("<div style='width: 100%' class='video_wrapper'></div>");

videoInput.wrap(videoWrapper);
videoWrapper = $(".video_wrapper");

dropVideoZone = $(`
<div class="dropZone" id="dropVideoZone">
    Перетащите сюда видео
</div>
`);

videoWrapper.prepend(dropVideoZone);


videoInput.change(function () {
    filename = this.files[0].name;
    console.log(filename);
});

videoInput[0].accept = "video/*";

// ************ Drag&Drop JS  ************
dropVideoZone.on("dragover", function (e) {
    e.preventDefault();
    $(this).addClass("hover");
});

dropVideoZone.on("dragleave", function (e) {
    e.preventDefault();
    $(this).removeClass("hover");
});

dropVideoZone[0].addEventListener("drop", function (e) {
    e.preventDefault();

    let file = e.dataTransfer.files[0];

    if (file.type.split("/")[0] !== "video") {
        dropVideoZone.addClass("error");
        setTimeout(function () {
            dropVideoZone.removeClass("error")
        }, 100);
        // dropVideoZone.removeClass("error");
        dropVideoZone.removeClass("hover");
        return;
    }

    let dt = new DataTransfer();
    dt.items.add(file);
    let file_list = dt.files;

    videoInput[0].files = file_list;
    videoInput.trigger("change");

    dropVideoZone.removeClass("hover");
});
// ***************************************
