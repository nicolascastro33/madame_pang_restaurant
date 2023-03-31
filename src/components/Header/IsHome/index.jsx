import { 
  HeaderMadame, 
  LogoHeader, 
  VideoHeader, 
  NavHeader,
  ButtonHeader
} from "./style"
import Logo from "../../../data/images/logo_restaurant.png"
import BurgerMenu from "../../BurgerMenu"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import video from "../../../data/video/video-madame-pang.mp4"
import LoadinPage from "../../LoadingPage"



function IsHome() {

  return (
    <HeaderMadame>
      <LoadinPage/>
      <VideoHeader src={video} autoPlay={true} loop="infinite" muted={true}/>
      <NavHeader>
        <a href="/">
          <LogoHeader src={Logo} alt="logo madame pang" />
        </a>
        <BurgerMenu/>
      </NavHeader>
      <ButtonHeader onClick={() => document.location.href = "#HomeRestaurant"}>
    
      <FontAwesomeIcon icon={faArrowDown} /> 
      </ButtonHeader>        
    </HeaderMadame>
  )
}

export default IsHome
