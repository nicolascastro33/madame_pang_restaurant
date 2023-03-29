import { HomeAwardWrapper } from "./style"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import { slideInRight } from "../../../utils/ScrollEffect"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
function HomeAward(){
    return(
        <HomeAwardWrapper>

        </HomeAwardWrapper>
    )
}

export default HomeAward
