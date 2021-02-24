import styled from "styled-components";

const Timeline = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 clamp(16px, 2rem, 20px);
  position: relative;

  &:after {
    background-color: ${props => props.theme.colors.textContrastShaded};
    content: ' ';
    position: absolute;
    height: 0;
    right: 0;
    bottom: 0;
    transition: height 1s ease;
    width: 1px;
  }

  &.--active {

    > div {
      opacity: 1;
      transform: translateX(0);
      > h6 {
          &:before {
          transform: scale(1);
        }
      }
    }

    &:after {
      height: 100%;
    }
  }
`

Timeline.Item = styled.div`
  margin: 1rem 0;
  max-width: 35rem;
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 500ms ease ${props => props.delay}, transform 500ms ease-out ${props => props.delay};
  z-index: 99;
  
  @media screen and (max-width: 600px) {
    max-width: unset;
    width: 100%;
  }

  > p {
    text-align: right;
    margin: 1rem 0;
  }
  
  > h6 {
    right: 0px;
    position: relative;
    text-align: right;
  
    &:before {
      background: ${props => props.theme.colors.primaryGradient};
      border-radius: 50%;
      content: ' ';
      height: 20px;
      position: absolute;
      right: -30px;
      transform: scale(0);
      transition: transform 500ms ease-in-out ${props => props.delay};
      width: 20px;
      
      @media screen and (max-width: 600px) {
        height: 15px;
        right: -24px;
        width: 15px;        
      }
    }
  }
`

export default Timeline;