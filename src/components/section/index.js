import styled from 'styled-components';
import SectionsHandler from '../../utils/sectionsHandler';

const Section = styled.section`
  background: linear-gradient(200deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%);
  height: ${SectionsHandler.SECTION_HEIGHT}px;
  opacity: 0;
  padding: 5rem 8rem;
  transition: opacity 300ms ease;

  &.--active {
    opacity: 1;
  }  
`

Section.Main = styled.section`
  background-color: transparent;
  height: ${SectionsHandler.SECTION_HEIGHT}px;
  padding: 3rem 6rem;
`

Section.Header = styled.h3`
  font-family: 'DejaVuSans', sans-serif;
  font-size: 3rem;
  font-weight: 300;
  text-transform: uppercase;
  opacity: .25;
  
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
  max-width: 120rem;
  margin: 0 auto;
  padding: 4rem 2rem;
  position: relative;
  
  &.--spread {
    grid-template-columns: 1fr;
  }
  
  .carousel__back-button, .carousel__next-button  {
    background: none;
    border: 0;
    color: ${props => props.theme.colors.textContrast};
    font-family: "DejaVu Sans", sans-serif;
    font-size: 3rem;
    position: absolute;
    top: 58rem;
    z-index: 999;
    
    &:hover {
      transform: scale(1.2);
    }
    
  }

  .carousel__back-button {
    left: 10rem;
  }

  .carousel__next-button {
    right: 10rem;
  }
`

export default Section;