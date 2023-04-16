import {PhotoDto} from "./photoDto";

export interface PhotoCollectionDto {
  count: number;
  next: string | null;
  previous: string | null;
  results: PhotoDto[];
}
