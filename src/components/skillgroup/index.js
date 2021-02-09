import styled from "styled-components";

const SkillGroup = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 0;
`

SkillGroup.Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  > p {
    margin: 15px 0 5px 0;
    text-transform: uppercase;
  }
`

SkillGroup.Progress = styled.div`
  border: 1px solid ${props => props.theme.colors.textContrastShaded};
  height: 25px;
  position: relative;
  width: 200px;
  
  &:before {
    background-color: ${props => props.theme.colors.primary};
    content: ' ';
    height: 100%;
    position: absolute;
    right: 0;
    width: ${props => props.value}%;
  }
`

export default SkillGroup;