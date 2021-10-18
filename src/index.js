import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import GlobalFonts from './fonts/fonts';
const Global = createGlobalStyle`*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Arabic";
  font-style: normal;
  font-weight: normal;
  
}`;

const theme = {
  media: {
    phone: '(max-width: 425px)',
    tablet: '(max-width: 768px) and (min-width: 425px)',
  },
};
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <Global />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
