import styled from 'styled-components';
import React from 'react';

const boundaries = {
  mobile: 20,
  regular: 60,
  wide: 800,
}

const Line = styled.div`
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 60%, rgba(255,255,255,0) 100%);
  height: 0px;
  left: 50vw;
  opacity: .25;
  pointer-events: default;
  position: absolute;
  transition: transform 300ms ease-out;
  top: 480px;
  width: 2px;
  z-index: 999;
  
  > div {
     opacity: 0;
  }

  @media screen and (max-width: 600px) {
    top: 80rem;
    width: 1px;
  } 
  
  &.--center {
    opacity: 1;
    left: 50vw;
    
    > div {
      opacity: 1;
    }    
  }

  &.--left {
    pointer-events: none;
    transform: translate(-50vw) translate(${boundaries.regular}px);
    
    @media screen and (max-width: 600px) {
      transform: translate(-50vw) translate(${boundaries.mobile}px);
    }    

    @media screen and (min-width: 1400px) {
      transform: translate(-${boundaries.wide}px);
    }

  }

  &.--right {
    pointer-events: none;
    transform: translate(50vw) translate(-${boundaries.regular}px);
    
    @media screen and (max-width: 600px) {
      transform: translate(50vw) translate(-${boundaries.mobile}px);
    }

    @media screen and (min-width: 1400px) {
      transform: translate(${boundaries.wide}px);
    }        
  }
`

Line.Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  left: 0;
  padding: 2rem 0 25vh 20px;
  position: absolute;  
  top: 0;
  transition: opacity 300ms ease;
`

Line.Text = styled.p`
  color: #ffffff;
  font-family: 'DejaVuSans', sans-serif;
  font-size: clamp(18px, 2.5rem, 250px);
  font-weight: 300;
  left: 20px;
  text-align: left;
  text-transform: uppercase;
  transition: opacity 300ms ease;
  margin: 1rem 0;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`

Line.Social = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  transition: opacity 300ms ease;

  > p {
    grid-column: 1 / span 3;
  }

  > a {
    cursor: none;
    transition: opacity 300ms ease;
    opacity: .5;

    &:hover {
      opacity: 1;
    }
  }  

  @media screen and (max-width: 350px) {
    grid-template-columns: 1fr 1fr;
    
    > p {
      grid-column: 1 / span 2;
    }    
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