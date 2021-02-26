import styled from 'styled-components';
import React, { useEffect } from 'react';

const Line = styled.div`
  position: absolute;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 60%, rgba(255,255,255,0) 100%);
  height: 0px;
  left: 50vw;
  opacity: .25;
  transition: transform 300ms ease-out;
  top: 480px;
  width: 2px;
  z-index: 999;

  @media screen and (max-width: 600px) {
    top: 100rem;
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
    }    

    @media screen and (min-width: 1400px) {
      transform: translate(-800px);
    }

  }

  &.--right {
    transform: translate(50vw) translate(-60px);
    
    @media screen and (max-width: 600px) {
      transform: translate(50vw) translate(-20px);
    }

    @media screen and (min-width: 1400px) {
      transform: translate(800px);
    }        
  }
`
Line.SeeMore = styled.p`
  color: #ffffff;
  font-family: 'DejaVuSans', sans-serif;
  font-size: clamp(18px, 2.5rem, 250px);
  font-weight: 300;
  left: 52%;
  opacity: 0;
  text-align: left;
  text-transform: uppercase;
  top: 480px;
  transition: opacity 300ms ease;
  position: fixed;

  @media screen and (max-width: 600px) {
    font-size: 16px;
    left: 54%;
    top: 100rem;
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
  top: 56rem;
  visibility: hidden;
  z-index: -99;

  > a {
    cursor: none;
  }

  &.--active {
    opacity: 1;
    z-index: 1;
  }

  &.--visible {
    visibility: visible;
  }

  @media screen and (max-width: 600px) {
    top: 108rem;
    left: 52.5%
  }
  
`

Line.Social.Icon = props => {

  return(
    <a  onMouseEnter={() => props.cursor.current.classList.add('--active')} 
        onMouseLeave={() => props.cursor.current.classList.remove('--active')} 
        target='_blank'
        rel='noopener noreferrer'
        href={props.link}>
      {props.children}
    </a>
  )
}

export default Line;