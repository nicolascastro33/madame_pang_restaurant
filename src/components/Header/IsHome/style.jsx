import styled from "styled-components";
import { colors } from "../../../utils/styles/colors";

export const HeaderMadame = styled.header`
    background-color : ${colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    // padding: 2% 3% 0 3%;
    position relative;
    text-align: center;
    overflow: hidden;
`

export const VideoHeader = styled.video`
    position: absolute;
    min-height: 100%;
    min-width: 115%;
    top: 50%;
    left:50%;
    transform: translate(-50%, -51%);
    z-index: 0;
`

export const LogoHeader = styled.img`
    width: 150px;
    margin-bottom: 0;
    position: relative;
    top: 20px;
    `

export const NavHeader = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const ButtonHeader = styled.button`
    position: relative;
    background-color: ${colors.secondary};
    z-index: 2;
    width: 90px;
    height: 30px;
    margin-right: auto;
    margin-left: auto;
    border-top-left-radius: 90px;
    border-top-right-radius:90px;
`


