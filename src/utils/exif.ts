import EXIF from 'exif-js';
import { PhotoMetadataType } from '../types/photo';

export const getEXIF = (imageElement: any) => {

    return new Promise<PhotoMetadataType>((resolve, reject) => {

        EXIF.enableXmp();
        EXIF.getData(imageElement, function () {
            const title = EXIF.getTag(this, "Title");
            const description = EXIF.getTag(this, "ImageDescription");
            const location = EXIF.getTag(this, "Location");
            const date = EXIF.getTag(this, "DateTimeOriginal");

            const shutter = EXIF.getTag(this, "ShutterSpeedValue");
            const aperture = EXIF.getTag(this, "ApertureValue");
            const iso = EXIF.getTag(this, "ISO");
            const focalLength = EXIF.getTag(this, "FocalLength");

            const cameraMake = EXIF.getTag(this, "Make");
            const cameraModel = EXIF.getTag(this, "Model");
            const lensModel = EXIF.getTag(this, "LensModel");

            resolve({
                title, description, location, date, shutter, 
                aperture, iso, focalLength, cameraMake, cameraModel, lensModel,
            });
        });
    })

}