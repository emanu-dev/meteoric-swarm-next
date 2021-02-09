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
    padding: 3rem 6rem;   
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
  font-size: clamp(20px, 2.5rem, 25px);
  font-weight: 300;
  opacity: .25;
  margin: 2rem;
  text-transform: uppercase;
  
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
  grid-gap: 4rem;
  max-width: 160rem;
  margin: 0 auto;
  padding: 4rem 2rem;
  position: relative;
  
  @media screen and (max-width: 600px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &.--full {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 0;

    @media screen and (max-width: 1000px) {
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 100%;
    }    
  }
`

export default Section;