import styled from "styled-components";
import {colors} from "../../utils/styles/colors"


export const GalleryImages = styled.img`
    width: 100%;
`

export const GalleryWrapper = styled.div`
    display: flex; 
    flex-direction: column;

`
export const GalleryTextWrapper = styled.div`
    border: 10px solid black;
    width: 200px;
    height: 80px;
    text-align: center;
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: ${colors.secondary}; 
    display: flex;
    justify-content: center;

`


export const GalleryText = styled.h1`
    font-size: 48px;
    margin: auto;
`