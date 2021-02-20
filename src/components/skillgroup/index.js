import styled from "styled-components";

const SkillGroup = styled.div`
  align-items: flex-start;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 1fr);
  margin: 20px 0 0 0;

  > h6 {
      grid-column-start: span 2;
      text-align: left;
    }

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, auto);
    width: 100%;
    

  }
`

SkillGroup.Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  > p {
    margin: 15px 0 5px 0;
    text-align: left;
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
    left: 0;
    width: ${props => props.value}%;

    @media screen and (max-width: 600px) {
      left: 0;
      right: unset;
    }
  }
`

export default SkillGroup;