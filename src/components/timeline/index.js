import styled from "styled-components";

const Timeline = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${props => props.theme.colors.textContrastShaded};
  justify-content: center;
  padding: 0 clamp(16px, 2rem, 20px);
`

Timeline.Item = styled.div`
  margin: 1rem 0;
  max-width: 35rem;
  
  > p {
    text-align: right;
    margin: 1rem 0;
  }
  
  > h6 {
    right: 0px;
    position: relative;
    text-align: right;
    
    &::before {
      background: ${props => props.theme.colors.primaryGradient};
      border-radius: 50%;
      content: ' ';
      height: 20px;
      right: -30px;
      position: absolute;
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