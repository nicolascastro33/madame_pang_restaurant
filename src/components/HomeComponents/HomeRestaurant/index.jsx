import { 
    HomeRestaurantWrapper,
    TextHomeRestaurant,
 } from "./style"
import pictureIsLoading from "../../../data/images/_L5A2389.jpg"

function HomeRestaurant(){
    return(
    <HomeRestaurantWrapper>
        <TextHomeRestaurant>Madame Pang
Un Bar à Dim Sum Unique au Coeur de Bordeaux.

Madame Pang est inspiré de la culture culinaire Hong Kongaise. Vous y découvrirez un mélange de tradition et de modernité tant dans le décor, que dans les boissons et mets proposés.

Madame Pang est un bar offrant un large choix de boissons de qualité. Vous pourrez y déguster de nombreux spiritueux premiums, des bières asiatiques ou vous laissez tenter par la carte des cocktails élaborés dans le soucis du détail par notre Chef de Bar, avec ce twist asiatique qui fait notre signature.

Vous aurez aussi la possibilité de vous délecter d'un choix de vins sélectinonés avec soin par notre Chef Sommelière.

Côté cuisine, Madame Pang est spécialisé dans les dim sum. Ces fameuses bouchées vapeur qui se partagent et qui chez nous se métissent avec nos produits locaux de saison.

Notre Chef vous propose aussi un large choix de snacks et de petits plats qui changent au fil du temps et de ses envies. Quelques douceurs viendront aussi combler les gourmands(es).

Madame Pang est localisé dans le vieux Bordeaux et vous accueille du mardi au dimanche, avec la possibilité de se restaurer jusque tard dans la nuit et ce,                            SANS RESERVATION. 

Chaque dimanche, Madame Pang accueille un artiste afin de vous faire découvrir un nouvel univers audiophile & gourmand. Alors rejoignez le Gang pour terminer la semaine en beauté chez Madame Pang.
</TextHomeRestaurant>
    <img src={pictureIsLoading} alt="pictureLoading"/>
    </HomeRestaurantWrapper>
    )
}

export default HomeRestaurant
