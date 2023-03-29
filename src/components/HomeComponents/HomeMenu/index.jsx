import { HomeMenuWrapper } from "./style"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import { slideInRight } from "../../../utils/ScrollEffect"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
function HomeMenu(){

    return(
        <HomeMenuWrapper id="Menu">

        </HomeMenuWrapper>
    )
}

export default HomeMenu
