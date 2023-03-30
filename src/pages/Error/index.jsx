import { ErrorData } from '../../data/DataImages'
import { useEffect } from 'react'
import GalleryCardsError from '../../components/GalleryCardsError'
import { AllImagesWrapper } from './style.jsx'

function Error() {
  useEffect(() => {
    document.title = 'Madame Pang - Erreur'
  })
  return (
    <AllImagesWrapper>
      {ErrorData.map((galleryImage, index) => (
        <GalleryCardsError
          title={galleryImage.title}
          cover={galleryImage.picture}
          key={`${galleryImage.title}-${index}`}
        />
      ))}
    </AllImagesWrapper>
  )
}

export default Error
