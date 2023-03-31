import { colors } from "../../utils/styles/colors";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
    color: white;
    font-size: 12px;
    position: absolute;
    width: 100%;
    bottom: 0;
`

export const MediaWrapper = styled.div`
    margin: auto;
    display: flex;
    justify-content: space-between;
    width: 200px;
`

export const AllElementsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: center;
`

export const NoBooking = styled.div`
    margin: auto;
`

export const Adresse = styled.div`
margin: auto;

`

export const Hours = styled.div`
margin: auto;

`

export const LogoFooter = styled.img`
    margin: auto;
    width: 100px;
`

export const OneLogo = styled.span`
    width: 35px;
    height: 35px;
    background-color: ${colors.secondary};   
    dipslay: flex;
    justify-content: center;
    align-items: center;  
    border-radius: 100%;
    transform: scale(1);
    transition: transform 500ms;
    & a{
        color: black; 
        margin: auto;
        margin-top: 6px;
    }
    &:hover{
        transform: scale(1.2);
        transition: transform 500ms;
    }
`