import { useState } from "react"
import { 
    BurgerMenuWrapper,
    BurgerMenuButton,
    BurgerMenuLink,
    BurgerMenuLinks,
    BurgerMenuBar,
} from "./styles"


function BurgerMenu(){
    const {isOpen, setIsOpen} = useState(false)
    // const isOpenMenu = isOpen ? "burger-menu-link-open" : "burger-menu-link"
    
    return(
        <BurgerMenuWrapper>
            <BurgerMenuButton onClick={() => setIsOpen(!isOpen)}>
                <BurgerMenuBar/>
            </BurgerMenuButton>
            <BurgerMenuLinks>
                {isOpen ? (
                    <BurgerMenuLink href="/menu" className="link-1">
                        <li></li>
                    </BurgerMenuLink>
                ) : (
                    <BurgerMenuLink href="/menu" className="link-1">
                    <li></li>
                    </BurgerMenuLink>
                )}
                {/* <BurgerMenuLink href="/menu" className={isOpen ? "link-1" : "none"}>
                    <li></li>
                </BurgerMenuLink>
                <BurgerMenuLink href="/reservation" className={isOpen ? "link-2" : "none"}>
                    <li></li>
                </BurgerMenuLink>
                <BurgerMenuLink href="/gallery" className={isOpen ? "link-3" : "none"}>
                    <li></li>
                </BurgerMenuLink> */}
            </BurgerMenuLinks>
        </BurgerMenuWrapper>
    )
}

export default BurgerMenu