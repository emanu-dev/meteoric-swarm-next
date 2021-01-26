import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '../public/fonts/fonts.css';

const theme = {
  colors: {
    primary: '#FFA800',
    textContrast: '#FFFFFF',
  },
}

const GlobalStyle = createGlobalStyle`

  html {
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
