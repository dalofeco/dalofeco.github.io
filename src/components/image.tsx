/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { PhotoMetadataType } from '../data/photo';
import { getEXIF } from '../utils/exif';
import Loading from './loading';

interface ImageProps {
  src: string;
  id: string;
  className?: string;
  onLoad?: Function;
  onClick?: any;
  meta?: boolean;
}

const Image = ({ src, id, className, onLoad, onClick, meta = false }: ImageProps) => {
  const [loading, setLoading] = useState(true);

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Unset loading state
    setLoading(false);

    if (e && e.currentTarget) {
      // Get image element
      if (meta) {
        const { id: elementId } = e.currentTarget;
        const imageElement = document.getElementById(elementId);
        if (!imageElement) return;

        // Get EXIF and update state
        getEXIF(imageElement)
          .then((photoMetadata: PhotoMetadataType) => {
            if (onLoad) onLoad(photoMetadata);
          })
          .catch((err) => alert(err));
      } else if (onLoad) onLoad();
    }
  };

  return (
    <div className="FlexRowContainer">
      <img
        id={id}
        className={className}
        src={src}
        onLoad={onImageLoad}
        onClick={onClick}
        style={{ display: loading ? 'none' : 'unset' }}
      />
      <Loading className={className} style={{ display: loading ? 'unset' : 'none' }} />
    </div>
  );
};

export default Image;
