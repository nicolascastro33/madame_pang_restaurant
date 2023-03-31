import { 
  HeaderMadame, 
  LogoHeader, 
  NavHeader,
} from "./style"
import Logo from "../../../data/images/logo_restaurant.png"
import BurgerMenu from "../../BurgerMenu"


function IsNotHome() {
  const pathName = window.location.pathname
  const gallery = pathName === "/gallery" ? true : false
  const menu = pathName === "/menu" ? true : false 
  if(gallery || menu){
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
