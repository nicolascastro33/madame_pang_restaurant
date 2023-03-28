import { 
  HeaderMadame, 
  LogoHeader, 
  VideoHeader, 
  NavHeader,
  ButtonHeader
} from "./style"
import Logo from "../../data/images/logo_restaurant.png"
// import gsap from "gsap"
import BurgerMenu from "../BurgerMenu"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef } from "react"
import video from "../../data/video/video-madame-pang.mp4"


function Header() {

  // const titleRef = useRef()
  // const onload = () => {
  //   gsap.timeline().fromTo(".letter",
  //   {
  //     x: -100,
  //     opacity: 0,
  //   },
  //   {
  //     x: 0,
  //     opacity: 1,
  //     stagger: 0.20,
  //     delay: 3,
  //   }
  //   )
  // }

  // useEffect(() => {
  //   onload()
  // }, [])

  return (
    <HeaderMadame>
      <VideoHeader src={video} autoPlay={true} loop="infinite" muted={true}/>
      <NavHeader>
        <a href="/">
          <LogoHeader src={Logo} alt="logo madame pang" />
        </a>
        <BurgerMenu/>
      </NavHeader>
      <ButtonHeader>
      <FontAwesomeIcon icon={faArrowDown} /> 
      </ButtonHeader>        
    </HeaderMadame>
  )
}

export default Header
