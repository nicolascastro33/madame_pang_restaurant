import { galleryImages } from "../../data/galery"
import { useEffect } from "react"
import GalleryCards from "../../components/GalleryCards"
function Gallery(){
    useEffect(() => {
        document.title = "Madame Pang - Gallery"
    })
    return(
        <div>
            {galleryImages.map((galleryImage, index) => (
               <GalleryCards
               title={galleryImage.title}
               cover={galleryImage.picture}
               key={`${galleryImage.title}-${index}`}
               />
            ))}
        </div>
    )
}

export default Gallery