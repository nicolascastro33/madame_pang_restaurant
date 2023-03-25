import { 
  HeaderMadame, 
  GreyCircle, 
  LogoHeader
} from "./style"
import Logo from "../../data/images/logoDragon.png"
import BurgerMenu from "../BurgerMenu"

function Header() {
  return (
    <HeaderMadame>
        <GreyCircle>
        <a href="/">
          <LogoHeader src={Logo} alt="logo madame pang" />
        </a>
        <h1>Madame Pang</h1>
        </GreyCircle>
        <BurgerMenu/>
      {/* <NavigationMenu>
            <a href='/menu'><ItemsNavigationMenu>Menu</ItemsNavigationMenu></a>
            <a href="/reservation"><ItemsNavigationMenu>Reservation</ItemsNavigationMenu></a>
      </NavigationMenu> */}
    </HeaderMadame>
  )
}

export default Header
