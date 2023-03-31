import { MenuData } from "../../data/MenuData"
import { useEffect } from "react"
import "./styles.css"

function Menu() {
  const menu = MenuData.Menu
  useEffect(() => {
    document.title = 'Madame Pang - Menu'
  })

  return (
    
    <div className="boxesWrapper">
      <div className="box black">
        <div className="cocktailWrapper presentationMenu">
          <div className="textPresentationMenu">
            <h1>Menu - Madame Pang</h1>
            <p>Printemps - 2023</p>
          </div>
            
        </div>
      </div>
      {menu?.map((cocktail, index) => (
        <div className={`box ${cocktail.background}`} key={`box-${cocktail.title}-${index}`}>
          <div className="cocktailWrapper">
            <img src={cocktail.picture} alt="cocktail drinks" className="cocktailImage"/>
            <div className="cocktailText">
              <h2>{cocktail.name} ({cocktail.price}€)</h2>
              <p><b>Ingrédients:</b> {cocktail.ingredients}</p>
              <p><b>Description:</b> {cocktail.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Menu
