import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root{
  min-height: 100vh;
}

body, input, button{
  color: #222;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif
}
`;
