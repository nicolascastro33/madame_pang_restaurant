import { createGlobalStyle } from "styled-components";
// import { colors } from "../colors";

const StyledGlobalStyle = createGlobalStyle`
    *{
        font-family: 'DM Serif Display', serif,Montserrat, 'Trebuchet MS', Helvetica, sans-serif;
        font-size: 24px;
    }

    body{
        margin: 0;
        position: relative;
    }

    a{
        text-decoration: none;
    }
     
    li{
        list-style-type: none;
    }
`
// scroll-padding-bottom: 0;

function GlobalStyle(){
    return <StyledGlobalStyle/>
}

export default GlobalStyle