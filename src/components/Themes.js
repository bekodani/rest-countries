import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: 'hsl(0, 0%, 98%)',
    fontColor: "#000",
    element: "hsl(0, 0%, 100%)",
    shadow: "0px 0px 5px 0px rgba(100, 100, 100, 0.25)",
    card: "hsl(0, 0%, 100%)"
};  

export const darkTheme = {
    body: 'hsl(207, 26%, 17%)',
    fontColor: "hsl(0, 0%, 100%)",
    element: "hsl(209, 23%, 22%)",
    shadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.25)",
    card: "hsl(209, 23%, 22%)"
}  

export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${(props) => props.theme.body};
    };

    .header-ul {
        background-color: ${(props) => props.theme.element};
        box-shadow: ${(props) => props.theme.shadow};
    };

    .country-card {
        background-color: ${(props) => props.theme.card};
        box-shadow: ${(props) => props.theme.shadow};
    }
    
    input {
        background-color: ${(props) => props.theme.element};
        box-shadow: ${(props) => props.theme.shadow};
    };

    select, .back-btn, .border-li-style {
        background-color: ${(props) => props.theme.element};
        box-shadow: ${(props) => props.theme.shadow};
        color: ${(props) => props.theme.fontColor};
    };

    .nav-btn, label, option, h2, h6, p {
        color: ${(props) => props.theme.fontColor};
    }

    ::placeholder {
        color: ${(props) => props.theme.fontColor};
    }

`;