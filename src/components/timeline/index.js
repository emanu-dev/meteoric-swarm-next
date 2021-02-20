import styled from "styled-components";

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${props => props.theme.colors.secondary};
  justify-content: center;
  padding: 0 clamp(16px, 2rem, 20px);
`

Timeline.Item = styled.div`
  margin: 1rem 0;
  
  > p {
    text-align: right;
    margin: 1rem 0;
  }
  
  > h6 {
    left: 0px;
    position: relative;
    text-align: right;
    
    &::before {
      background-color: ${props => props.theme.colors.secondary};
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