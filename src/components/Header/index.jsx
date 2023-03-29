import IsHome from "./IsHome"
import IsNotHome from "./IsNotHome"
// import gsap from "gsap"

function Header() {

  const pathName = window.location.pathname
  const isHome = pathName === "/" ? true : false

  if(isHome){
    return <IsHome/>
  }
    return <IsNotHome/>
}

export default Header
