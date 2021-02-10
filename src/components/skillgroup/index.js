import styled from "styled-components";

const SkillGroup = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 0;

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    
    > h6 {
      grid-column-start: span 2;
    }
  }
`

SkillGroup.Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  > p {
    margin: 15px 0 5px 0;
    text-transform: uppercase;
  }
  
  @media screen and (max-width: 600px) {
    align-items: flex-start;
  }  
`

SkillGroup.Progress = styled.div`
  border: 1px solid ${props => props.theme.colors.textContrastShaded};
  height: 25px;
  position: relative;
  width: 200px;

  @media screen and (max-width: 600px) {
    height: 15px;
    width: 35vw;
  }
  
  &:before {
    background-color: ${props => props.theme.colors.primary};
    content: ' ';
    height: 100%;
    position: absolute;
    right: 0;
    width: ${props => props.value}%;

    @media screen and (max-width: 600px) {
      left: 0;
      right: unset;
    }
  }
`

export default SkillGroup;