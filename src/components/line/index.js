import styled from 'styled-components';
import React from 'react';

const Line = styled.div`
  position: absolute;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 60%, rgba(255,255,255,0) 100%);
  height: 0px;
  left: 50vw;
  opacity: .25;
  transition: transform 300ms ease;
  top: 60rem;
  width: 2px;
  z-index: 999;

  @media screen and (max-width: 600px) {
    width: 1px;
  } 
  
  &.--center {
    opacity: 1;
    left: 50vw;
  }

  &.--left {
    transform: translate(-50vw) translate(60px);
    
    @media screen and (max-width: 600px) {
      transform: translate(-50vw) translate(20px);
      width: 1px;
    }    
  }

  &.--right {
    transform: translate(50vw) translate(-60px);
    
    @media screen and (max-width: 600px) {
      transform: translate(50vw) translate(-20px);
      width: 1px;
    }    
  }
`
Line.SeeMore = styled.p`
  color: #ffffff;
  font-family: "DejaVu Sans", sans-serif;
  font-size: 2.5rem;
  font-weight: 300;
  left: 52%;
  opacity: 0;
  text-align: left;
  text-transform: uppercase;
  top: 58rem;
  transition: opacity 300ms ease;
  position: fixed;

  @media screen and (max-width: 600px) {
    font-size: 16px;
    left: 54%;
  }

  &.--active {
    opacity: 1;  
  }
`

Line.Social = styled.div`
  display: flex;
  opacity: 0;
  transition: opacity 300ms ease;
  position: fixed;
  left: 52%;
  top: 65rem;
  visibility: hidden;
  z-index: -99;

  &.--active {
    opacity: 1;
    z-index: 1;
  }

  &.--visible {
    visibility: visible;
  }  
  
`

Line.Social.Icon = props => {
  return(
    <a target='_blank' rel='noopener noreferrer' href={props.link}>
      {props.children}
    </a>
  )
}

export default Line;