import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '../public/fonts/fonts.css';

const theme = {
  colors: {
    primary: '#7303c0',
    textContrast: '#FFFFFF',
    primaryGradient: 'linear-gradient(45deg, #03001e, #7303c0, #ec38bc, #fdeff9)',
  },
}

const GlobalStyle = createGlobalStyle`

  html {
    cursor: none;
    font-size: 10px;
    
    @media screen and (min-width: 681px) and (max-width: 1000px) {
      font-size: 8px;  
    }

    @media screen and (min-width: 321px) and (max-width: 680px){
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
