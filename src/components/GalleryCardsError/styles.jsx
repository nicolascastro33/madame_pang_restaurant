import styled from "styled-components";
import { colors } from "../../utils/styles/colors";


export const ErrorImagesWrapper = styled.div`
    width: 40vh;
    border-radius: 10%;
    overflow: hidden; 
    border: 2px solid ${colors.secondary};
    height: 400px;
    margin-bottom: 50px;
    margin-right: 20px;
    transform: scale(1) rotate(10deg);
    transition: transform 400ms ease-in-out;
    &:hover{
        transform: scale(1.2) rotate(0deg);
        transition: transform 400ms ease-in-out;
    }
`

export const ErrorTextWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    background-color: ${colors.secondary};
    & p{
        color: ${colors.primary};
        text-decoration: underline;
        &:hover{
            text-decoration: none
        }
    }
`

export const ErrorImage = styled.img`
    width: 100%;
    filter: grayscale(100%) blur(3px);
    transition: filter 400ms ease-in-out;
    &:hover{
        filter: blur(0);
        transition: filter 400ms ease-in-out;
    }
`

export const ErrorText = styled.h1`
    margin: auto;
    font-size: 100px;

`
