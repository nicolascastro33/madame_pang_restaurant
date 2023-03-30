import styled from "styled-components";
import { colors } from "../../../utils/styles/colors";

export const HeaderMadame = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${colors.primary};
    height: 30vh;
    text-align: center;
    overflow: hidden;
    ${(props) =>
        props.$transparent &&`
            position: absolute;
            width: 100%;
            background-color: unset;
        `
    }
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
