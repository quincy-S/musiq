import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body,html{
        height:100%;
        background: ${(props) => props.theme.mainBackground};
        font-family: 'Quicksand', sans-serif;
    }
`;

export default GlobalStyle;
