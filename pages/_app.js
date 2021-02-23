import { createGlobalStyle, ThemeProvider } from 'styled-components'
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
    color: ${theme.colors.textContrast};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`



export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
