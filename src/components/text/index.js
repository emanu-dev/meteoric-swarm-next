import styled from "styled-components";

const Text = styled.div`
  align-self: stretch;
  color: ${props => props.theme.colors.textContrast};
  display: flex;
  flex-direction: column;

  &.--anim {
    opacity: 0;
    transform: translateX(-100%);
    transition: transform 500ms ease-out, opacity 500ms ease-in-out;

    &.--on-screen {
      opacity: 1;
      transform: translateY(0);
    }
  }  
`

Text.Header = styled.h3`
  background: ${props => props.theme.colors.primaryGradient};
  font-family: 'Atkinson Hyperlegible', sans-serif;
  font-size: clamp(40px, 7rem, 70px);
  line-height: 90%;
  margin: 0;
  text-transform: uppercase;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;  
`

Text.SmallHeader = styled.h6`
  color: ${props => props.theme.colors.primary};
  font-family: 'Atkinson Hyperlegible', sans-serif;
  font-size: clamp(18px, 2.4rem, 24px);
  font-weight: 700;
  line-height: 100%;
  margin: 0;
  text-transform: uppercase;
`

Text.Body = styled.p`
  color: ${props => props.theme.colors.textContrast};
  font-family: 'DejaVuSans', sans-serif;
  font-size: clamp(14px, 2.2rem, 22px);
  font-weight: 300;
  line-height: 120%;
  
  > a {
    background-color: pink;
  }    
`

Text.Small = styled.p`
  color: ${props => props.theme.colors.textContrastShaded};
  font-family: 'DejaVuSans', sans-serif;
  font-size: clamp(12px, 1.6rem, 16px);
  font-weight: 300;
  line-height: 100%;
  text-transform: uppercase;
`
Text.Button = styled.a`
  background: rgba(0, 0, 0, .25);
  border: 1px solid rgba(255, 255, 255, .3);
  box-shadow: 0 0 0 ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textContrast};
  cursor: none;
  font-family: 'DejaVuSans', sans-serif;
  font-size: clamp(12px, 1.6rem, 16px);
  font-weight: 300;
  margin: 0 0 1rem 0;
  padding: 10px 20px;
  top: 20px;
  text-decoration: none;
  text-transform: uppercase;
  transition: box-shadow 300ms ease;
  width: fit-content;
  
  &:hover {
    box-shadow: 2px 2px 0 ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
  }
`

export default Text;