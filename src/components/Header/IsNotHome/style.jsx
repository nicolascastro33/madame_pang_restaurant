import styled from "styled-components";
import { colors } from "../../../utils/styles/colors";

export const HeaderMadame = styled.header`
    background-color : ${colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 30vh;
    // padding: 2% 3% 0 3%;
    position relative;
    text-align: center;
    overflow: hidden;
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
