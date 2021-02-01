import styled from 'styled-components';

const Line = styled.div`
  position: absolute;
  background-color: #fff;
  height: 0px;
  left: 50vw;
  opacity: .25;
  transition: transform 300ms ease;
  top: 60vh;
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
    transform: translate(-50vw) translate(20px);
    
    @media screen and (max-width: 600px) {
      width: 1px;
    }    
  }

  &.--right {
    transform: translate(50vw) translate(-20px);
    
    @media screen and (max-width: 600px) {
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
  top: 58vh;
  transition: opacity 300ms ease;
  position: fixed;

  @media screen and (max-width: 600px) {
    font-size: 1.6rem;
    left: 54%;
  }

  &.--active {
    opacity: 1;  
  }
`

export default Line;