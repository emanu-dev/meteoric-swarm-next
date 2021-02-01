import styled from 'styled-components';
import SectionsHandler from '../../utils/sectionsHandler';

const Section = styled.section`
  background: linear-gradient(200deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%);
  height: ${SectionsHandler.SECTION_HEIGHT}px;
  opacity: 0;
  overflow: hidden;
  padding: 5rem 8rem;
  transition: opacity 300ms ease;

  @media screen and (max-width: 600px) {
    padding: 2rem 4rem;   
  }
  
  &.--active {
    opacity: 1;
  }
`

Section.Main = styled.section`
  background-color: transparent;
  height: ${SectionsHandler.SECTION_HEIGHT}px;
  padding: 3rem 6rem;

  @media screen and (max-width: 600px) {
    padding: 2rem 0;
  }  
`

Section.Header = styled.h3`
  font-family: 'DejaVuSans', sans-serif;
  font-size: 3rem;
  font-weight: 300;
  text-transform: uppercase;
  opacity: .25;

  @media screen and (max-width: 600px) {
    font-size: 2rem;  
  }  
  
  &.--left {
    text-align: left;
  }

  &.--right {
    text-align: right;
  }  
`
Section.Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  max-width: 160rem;
  margin: 0 auto;
  padding: 4rem 2rem;
  position: relative;

  @media screen and (max-width: 600px) {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  
  &.--spread {
    justify-items: center;
    grid-template-columns: 1fr;
    max-width: none;

    @media screen and (max-width: 600px) {
      max-width: 100vw;
    }
  }
  
  .carousel__dot-group  {
    display: inline;
    position: relative;
    top: -1rem;
    left: 3rem;

    @media screen and (max-width: 600px) {
      top: -25rem;
      left: 45%;
      z-index: 9999;
    }
    
    .carousel__dot {
      background: linear-gradient(45deg, #654ea3, #eaafc8);
      opacity: .25;
      border: 0;
      margin-left: .5rem;
      width: 3rem;
      height: 1rem;
      
      &.carousel__dot--selected {
        background: linear-gradient(45deg, #7303c0, #ec38bc);
        opacity: .8;
      }
    }
  }
`

export default Section;