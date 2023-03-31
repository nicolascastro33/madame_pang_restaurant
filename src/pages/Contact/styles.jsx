import styled from "styled-components";
import { colors } from "../../utils/styles/colors";

export const ContactWrapper = styled.div`
    width: 96%;
    background-color: ${colors.primary};
    margin: 0;
    height: 130vh;
    padding: 2%
`

export const TextContactWrapper = styled.div`
    color: white;
    & h1{
        font-size: 30px;
        text-align: center;
        margin: 0;
        }
    & p{
        margin-top: 50px;
        margin-bottom: 50px;
        line-height: 2em;
        
    }
`

export const ContactForEvent = styled.div`
    display: flex;
    justify-content: space-around;
`

export const MenuEventWrapper = styled.div`
    display: flex;
`
