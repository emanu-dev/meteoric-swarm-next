import styled from "styled-components";

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${props => props.theme.colors.secondary};
  justify-content: center;
  padding: 0 clamp(16px, 2rem, 20px);
`

Timeline.Item = styled.div`
  margin: 1rem 0;
  
  >p {
    margin: 1rem 0;
  }
  
  > h6 {
    position: relative;
    left: 0px;
    
    &::before {
      background-color: ${props => props.theme.colors.secondary};
      border-radius: 50%;
      content: ' ';
      height: 20px;
      left: -30px;
      position: absolute;
      width: 20px;
    }
  }
`

export default Timeline;