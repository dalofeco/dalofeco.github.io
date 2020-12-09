import { useState, useEffect } from 'react';
import { getGallery } from '../utils/s3';
import { EmptyGallery, GalleryType } from '../data/photo';

const useGallery = () => {
  const [gallery, setGallery] = useState<GalleryType>({ ...EmptyGallery });

  useEffect(() => {
    getGallery().then(setGallery);
  }, []);

  return gallery;
};

export default useGallery;
