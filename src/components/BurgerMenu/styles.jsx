import styled from "styled-components";
import { colors } from "../../utils/styles/colors";


export const BurgerMenuWrapper = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    margin: auto;
    margin-right: 10px;
`

export const BurgerMenuButton = styled.button`
    width: 100px;
    height 100px; 
    background-color: ${colors.red};
    border-radius: 100%;
    cursor: pointer;
    z-index: 1;
    &:hover{
        background-color: white;
    }
`

export const BurgerMenuLinks = styled.ul`
    position: absolute;
    height: 100%;
    width: 100px;
    margin: 0;
    top: 0;
    padding: 0;
`

export const BurgerMenuLink = styled.a`
    position: absolute;
    top: 10px;
    left: 8px;
    margin: auto;
    display: block;
    border-radius: 100%;
    width: 80px;
    height: 80px;
    opacity: 0;
    background-color: ${colors.red};
    transform: translate(0);
    transition: transform opacity 1000ms;
    :hover{
        background: white;
    }
    & .link-{
        &1{
            transform: translateY(80px);
            opacity: 1;
            transition: transform opacity 1000ms;
            display: unset;
        }
        &2{

        }
        &3{

        }
    }
`

export const BurgerMenuBar = styled.span`
    display: block;
    margin: auto;
    width: 30px;
    height: 3px;
    background-color: black;
    &:after{
        display: block;
        width: 30px;
        height: 3px;
        background-color: black;
        content: "";
        transform: translateY(-12px);
    }
    &:before{
        display: block;
        width: 30px;
        height: 3px;
        background-color: black;
        content: "";
        transform: translateY(11px);
    }
`
