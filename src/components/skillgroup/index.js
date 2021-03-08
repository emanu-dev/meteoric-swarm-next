import styled from "styled-components";
import React from 'react';

const SkillGroup = props => {
  return (
    <SkillGroup.Wrapper className={props.active ? '--active' : ''}>
      {React.Children.map(props.children, child => {
        return React.cloneElement(child, {
          active: props.active,
          className: props.active ? '--active' : '',
        })
      })}      
    </SkillGroup.Wrapper>
  )
}


SkillGroup.Wrapper = styled.div`
  align-items: end;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 1rem;
  height: fit-content;
  margin: 20px 0 0 0;
  width: fit-content;

  > h6 {
      grid-column-start: span 2;
      opacity: 0;
      transform: translateX(-40px);
      transition: opacity 300ms ease 1s, transform 300ms ease-in-out 1s;

      &.--active {
        opacity: 1;
        transform: translateX(0);
      }
    }

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, auto);
    width: 100%;
    height: fit-content;

    > h6 {
      text-align: right;
    }
  }
` 

SkillGroup.Item = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  opacity: 0;
  transition: opacity 500ms ease ${props => props.delay};
  
  > p {
    font-size: clamp(11px,1.6rem,16px);
    margin: 0 0 .5rem 0;
    text-align: left;
    text-transform: uppercase;
  }
  
  &.--active {
      opacity: 1;

      > div::before {
        width: ${props => props.value}%;
      }
    }

  @media screen and (max-width: 600px) {
    align-items: flex-end;
    > p {
      text-align: right;
    }
  }  
`

SkillGroup.Progress = styled.div`
  border: 1px solid ${props => props.theme.colors.textContrastShaded};
  height: 25px;
  position: relative;
  width: 200px;

  @media screen and (max-width: 600px) {
    height: 15px;
    width: 100%;
  }
  
  &:before {
    background: ${props => props.theme.colors.primaryGradient};
    content: ' ';
    height: 100%;
    left: 0;
    position: absolute;
    transition: width 300ms ease-in-out ${props => props.delay};
    width: 0;

    @media screen and (max-width: 600px) {
      left: unset;
      right: 0;
    }
  }
`

export default SkillGroup;