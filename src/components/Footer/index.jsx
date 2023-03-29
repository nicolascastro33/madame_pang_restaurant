import { 
    AllElementsWrapper,
    Adresse,
    Hours,
    NoBooking,
    MediaWrapper,
    FooterWrapper,
    LogoFooter,
    OneLogo
 } from "./style"
 import Logo from "../../data/images/logo_restaurant.png"

function Footer(){
    return(
        <FooterWrapper>
            <AllElementsWrapper>   
                <LogoFooter src={Logo} alt="Logo Madame Pang"/>
                <NoBooking>
                    <p>Sans Réservation /<br/>No Booking</p>
                </NoBooking>
                <Adresse>
                    16 Rue De La Devise<br/>33000 Bordeaux France
                </Adresse>
                <Hours>
                    Mardi - Samedi<br/>19h - 1h
                </Hours>
                <MediaWrapper>
                    <OneLogo>
                    <a href="https://www.facebook.com/MadamePangBordeaux" className="fa fa-facebook"> </a>
                    </OneLogo>   
                    <OneLogo>
                    <a href="https://www.instagram.com/MadamePangBordeaux" className="fa fa-instagram"> </a>
                    </OneLogo>   
                    <OneLogo>
                        <a href="https://www.twitter.com/MadamePangBordeaux" className="fa fa-twitter"> </a>
                    </OneLogo>   
                    <OneLogo>
                    <a href="https://www.youtube.com/MadamePangBordeaux" className="fa fa-youtube"> </a>
                    </OneLogo>   
                
                </MediaWrapper>
            </AllElementsWrapper>
        </FooterWrapper>
    )
}

export default Footer