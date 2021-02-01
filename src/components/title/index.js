import styled from "styled-components";

const Title = styled.div`
  margin-top: 5rem;
  font-family: 'Atkinson Hyperlegible', sans-serif;
  
  @media screen and (max-width: 600px) {
    margin-top: 10rem;  
  }
`

Title.Text = styled.p`
  background: linear-gradient(45deg, #654ea3, #eaafc8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;  
  color: ${props => props.theme.colors.textContrast};
  font-family: 'Atkinson Hyperlegible', sans-serif;
  font-weight: bold;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;

  &.--size-md {
    font-size: 9.5rem;
    line-height: 9.9rem;

    @media screen and (max-width: 600px) {
      font-size: 3.8rem;
      line-height: 3.5rem;      
    }
  }

  &.--size-lg {
    font-size: 18.6rem;
    line-height: 19.2rem;

    @media screen and (max-width: 600px) {
      font-size: 7.4rem;
      line-height: 6.5rem;      
    }
  }
  
  &.--glitched {
    position: relative;
    z-index: 999;
    
    &:before, &:after {
      background: ${props => props.theme.colors.primaryGradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;      
      content: 'DESIGN';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: 1;
    }
    &:after {
      animation: glitch .3s cubic-bezier(.25, .46, .45, .94) reverse both infinite;
      z-index: -2;
    }
    &:before {
      animation: glitch .3s cubic-bezier(.25, .46, .45, .94) both infinite;
      z-index: -1;
    }
    
    @keyframes glitch {
      0% {
        transform: translate(0);
      }
      20% {
        transform: translate(-2px, 2px);
      }
      40% {
        transform: translate(-2px, -2px);
      }
      60% {
        transform: translate(2px, 2px);
      }
      80% {
        transform: translate(2px, -2px);
      }
      to {
        transform: translate(0);
      }
    }    
  }
`;

Title.Tags = styled.p`
  color: ${props => props.theme.colors.textContrast};
  margin: 0 auto;
  text-transform: uppercase;
  text-align: center;  
`
Title.Tags.Tag = styled.span`
  font-size: 7rem;
  line-height: 7.4rem;

  @media screen and (max-width: 600px) {
    font-size: 2.8rem;
    line-height: 3.5rem;  
  }
`

export default Title;