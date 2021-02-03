import styled from "styled-components";

const Text = styled.div`
  align-self: stretch;
  color: ${props => props.theme.colors.textContrast};
  display: flex;
  flex-direction: column;
`
Text.Header = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-family: 'Atkinson Hyperlegible', sans-serif;
  font-size: 7rem;
  line-height: 90%;
  margin: 0;
  text-transform: uppercase;

  @media screen and (max-width: 600px) {
    font-size: 4rem;  
  }
`
Text.Body = styled.p`
  color: ${props => props.theme.colors.textContrast};
  font-family: 'DejaVuSans', sans-serif;
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 120%;

  @media screen and (max-width: 600px) {
    font-size: 1.6rem;
  }  
`

export default Text;