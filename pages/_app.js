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
