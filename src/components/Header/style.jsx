import styled from "styled-components";
import { colors } from "../../utils/styles/colors";

export const HeaderMadame = styled.header`
    background-color : ${colors.primary};
    display: flex;
    justify-content: space-between;
    height: 200px;
    padding: 2% 3% 0 3%;
    position relative;
`

export const GreyCircle = styled.div`
    border-radius: 100%;
    background-color: ${colors.tertiary};
    width: 150px;
    height: 150px;
    & h1{
        margin-top: 0;
        position: relative;
        left: 20px;

    }
`

export const LogoHeader = styled.img`
    width: 110px;
    margin-bottom: 0;
    position: relative;
    top: 20px;
    `

export const NavigationMenu = styled.nav`
    width: 30%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ItemsNavigationMenu = styled.h2`
    color: white;
    background-color: ${colors.secondary};
    width: 100px;
    height: 50px;
    margin-left: auto;
    text-align: center;
    border-radius: 50px;
    transform: scale(1);
    transition: transform 500ms;
    &:hover{
        transform: scale(1.1);
        transition: transform 500ms;
    }
`