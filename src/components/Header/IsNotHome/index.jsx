import { 
  HeaderMadame, 
  LogoHeader, 
  NavHeader,
} from "./style"
import Logo from "../../../data/images/logo_restaurant.png"
import BurgerMenu from "../../BurgerMenu"


function IsNotHome() {
  const pathName = window.location.pathname
  const transparentHeader = pathName === "/gallery" ? true : false
  console.log(transparentHeader)
  if(transparentHeader){
    return (
    <HeaderMadame $transparent>
      <NavHeader>
        <a href="/">
          <LogoHeader src={Logo} alt="logo madame pang" />
        </a>
        <BurgerMenu/>
      </NavHeader>       
    </HeaderMadame>
    )
  }
  return(
    <HeaderMadame>
      <NavHeader>
        <a href="/">
          <LogoHeader src={Logo} alt="logo madame pang" />
        </a>
        <BurgerMenu/>
      </NavHeader>       
    </HeaderMadame>
    )
  
}

export default IsNotHome
