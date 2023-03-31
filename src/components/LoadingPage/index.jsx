import logo from "../../data/images/logoDragon.png"
import "./styles.css"
 


function LoadinPage(){
    const {scrollTop} = document.documentElement;
   
    setTimeout(scrollTop, )

    return(
    <div className="container spinner">
      <img src={logo} className="loading" alt="Logo"/>
    </div>
    )
}

export default LoadinPage