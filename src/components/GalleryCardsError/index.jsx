import PropTypes from "prop-types"
import DefaultPicture from "../../data/images/logoDragon.png"
import { ErrorImage, ErrorImagesWrapper, ErrorText, ErrorTextWrapper,  } from "./styles.jsx"

function GalleryCardsError({cover, index}){
    return(
        <div>
            {cover === "error" ? (
                <ErrorImagesWrapper>
                    <ErrorTextWrapper>
                        <ErrorText>
                            404
                        </ErrorText>
                        <a href="/">
                            <p>Revenir au menu</p>
                        </a>
                    </ErrorTextWrapper>
                </ErrorImagesWrapper>
            ) : (
                <ErrorImagesWrapper>
                    <ErrorImage src={cover} alt="ErrorImages" />
                </ErrorImagesWrapper>
            )}
            
        </div>
    )
}

GalleryCardsError.prototype = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

GalleryCardsError.defaultProps = {
    cover: DefaultPicture,
    title: "photo du restaurant"
}

export default GalleryCardsError