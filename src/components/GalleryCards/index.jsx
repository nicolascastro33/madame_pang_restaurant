import PropTypes from "prop-types"
import DefaultPicture from "../../data/images/logoDragon.png"
import "./styles.css"

function GalleryCards({title, cover, index}){
    return(
        <div>
            {index === 5 ? (
                <div>
                    <h1>404</h1>
                </div>
            ) : (
                <img src={cover} alt={title} />
            )}
            
        </div>
    )
}

GalleryCards.prototype = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

GalleryCards.defaultProps = {
    cover: DefaultPicture,
    title: "photo du restaurant"
}

export default GalleryCards