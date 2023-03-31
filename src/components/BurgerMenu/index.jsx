import "./styles.css"
import { useState } from "react"



function BurgerMenu(){
    const {isOpen, setIsOpen} = useState(false)
    const isOpenMenuLink = isOpen ? "burgerLinkOpen" : "noChange"
    const isOpenMenuButton = isOpen && "burgerBarreOpen"
    return(
        <div className="burgerWrapper">
            <button className="burgerWrapperButton" onClick={() =>
                setIsOpen(!isOpen)
            }>
                <span className={`burgerBarre ${isOpenMenuButton}`}></span>
            </button>
            <div className="burgerLinksWrapper">
                <div className={`burgerLink ${isOpenMenuLink}`}>        
                </div>
            </div>

        </div>
    )
}

export default BurgerMenu