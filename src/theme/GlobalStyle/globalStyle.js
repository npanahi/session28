import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    direction: rtl;
    
}
ul , ol {
    list-style: none;
    padding: 0;
    margin: 0;
}
a {
    text-decoration: none;
}
* , *:after , *:before {
    box-sizing: border-box;
}
.container {
    width: 1200px;
    margin: 0 auto;
}
`;
