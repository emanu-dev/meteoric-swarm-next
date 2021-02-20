import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '../public/fonts/fonts.css';

const theme = {
  colors: {
    primary: '#7303c0',
    secondary: '#9a7bb3',
    textContrast: '#FFFFFF',
    textContrastShaded: 'rgba(255, 255, 255, .5)',
    primaryGradient: 'linear-gradient(45deg,#40186b,#7303c0,#ec38bc,#fdeff9)',
  },
}

const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;  
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
