import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React from 'react';
import '../public/fonts/fonts.css';

const theme = {
  colors: {
    primary: '#CA32FF',
    secondary: '#FF3E3E',
		bgLight: '#1F0027',
    textContrast: '#FFFFFF',
    textContrastShaded: 'rgba(255, 255, 255, .5)',
    primaryGradient: 'linear-gradient(100deg, #CA32FF 0%, #FF3E3E 100%)',
  },
}

const GlobalStyle = createGlobalStyle`
  *{
		-webkit-user-drag: none;
    box-sizing: border-box;  
		scrollbar-width: none;
  }

	::-webkit-scrollbar {
    display: none;
	}

  ::selection {
		background: #9a7bb3;
  }
    
  ::-moz-selection {
    background: #9a7bb3;
  }

  html {

    cursor: none !important;
    font-size: 10px;
    
    @media screen and (min-width: 701px) and (max-width: 1023px) {
      font-size: 8px;
    }

    @media screen and (min-width: 321px) and (max-width: 700px){
      font-size: 5px;
    }

    @media screen and (max-width: 320px){
      font-size: 4px;
    }    
    
  }

  body {
    box-sizing: border-box;
    color: ${theme.colors.textContrast};
    margin: 0;
    overflow-y: hidden;
    padding: 0;

      &.--loaded {
        overflow-y: scroll;
      }
  }
  
  .loading {
    align-items: center;
    background-color: black;
    color: ${theme.colors.textContrastShaded};
    display: flex;
    font-family: 'DejaVuSans', sans-serif;
    font-size: clamp(40px, 4rem, 70px);
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    position: absolute;
    transition: opacity 500ms ease-out 1s, visibility 500ms ease 1s;
    text-transform: uppercase;
    width: 100vw;
    z-index: 9999;

    &.--loaded {
      opacity: 0;
      visibility: hidden;
    }
  }
`

export default function App({ Component, pageProps }) {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div className="loading">
          loading... 
        </div>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
