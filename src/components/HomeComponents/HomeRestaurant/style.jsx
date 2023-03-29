import styled from "styled-components";
import { colors } from "../../../utils/styles/colors";

export const HomeRestaurantWrapper = styled.section`
    width: 100%;
    height: 110vh;
    background-color: ${colors.primary};
`

export const SlidingElements = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    text-align: center;
    padding: 0 3% 0 3%;

`

export const TextHomeRestaurant = styled.p`
    color: white;
    width: 40%;
    margin: 5%
`