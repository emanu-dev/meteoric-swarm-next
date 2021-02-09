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
  font-size: clamp(40px, 7rem, 70px);
  line-height: 90%;
  margin: 0;
  text-transform: uppercase;
`

Text.SmallHeader = styled.h6`
  color: ${props => props.theme.colors.secondary};
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
  font-size: clamp(16px, 2.2rem, 22px);
  font-weight: 300;
  line-height: 120%;
`

Text.Small = styled.p`
  color: ${props => props.theme.colors.textContrastShaded};
  font-family: 'DejaVuSans', sans-serif;
  font-size: clamp(12px, 1.6rem, 16px);
  font-weight: 300;
  line-height: 100%;
  text-transform: uppercase;
`

export default Text;