import styled from "styled-components";
import { colors } from "../../utils/styles/colors";

export const ContactWrapper = styled.div`
    width: 100%;
    background-color: ${colors.primary};
    margin: 0;
    height: 100vh;
`

export const TextContactWrapper = styled.div`
    color: white;
    & h1{
        margin: 0;
    }
`

export const ContactForEvent = styled.div`
    display: flex;
    justify-content: space-around;
`

export const MenuEventWrapper = styled.div`
    display: flex;
`


export const InputWrapper = styled.input`
    width: 40%;
`
