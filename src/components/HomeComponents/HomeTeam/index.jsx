import { HomeTeamWrapper } from "./style"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import { slideInRight } from "../../../utils/ScrollEffect"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
function HomeTeam(){
    return(
        <HomeTeamWrapper>

        </HomeTeamWrapper>
    )
}

export default HomeTeam
