import { GalleryData } from '../../data/DataImages'
import { useEffect } from 'react'
import {
  GalleryImages,
  GalleryWrapper,
  GalleryText,
  GalleryTextWrapper,
} from './style'

function Gallery() {
  useEffect(() => {
    document.title = 'Madame Pang - Gallery'
  })
  return (
    <GalleryWrapper>
      <GalleryTextWrapper>
        <GalleryText>Gallerie</GalleryText>
      </GalleryTextWrapper>

      {GalleryData.map((galleryImage, index) => (
        <GalleryImages src={galleryImage.picture} key={`images-${index}`} />
      ))}
    </GalleryWrapper>
  )
}

export default Gallery
