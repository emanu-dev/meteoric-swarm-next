import styled, {ThemeProvider} from "styled-components";

const Title = styled.div`
  font-family: 'Atkinson Hyperlegible', sans-serif;
`

Title.Text = styled.p`
  color: ${props => props.theme.colors.textContrast};
  font-family: 'Atkinson Hyperlegible', sans-serif;
  font-weight: bold;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;

  &.--size-md {
    font-size: 9.5rem;
    line-height: 9.9rem;
  }

  &.--size-lg {
    font-size: 18.6rem;
    line-height: 19.2rem;
  }  
`;

Title.Tags = styled.p`
  color: ${props => props.theme.colors.primary};
  margin: 0 auto;
  text-transform: uppercase;
  text-align: center;  
`
Title.Tags.Tag = styled.span`
  font-size: 7rem;
  line-height: 7.4rem;  
`

export default Title;