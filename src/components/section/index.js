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
  text-transform: uppercase;
  font-weight: 300;
  
  &.--left {
    text-align: left;
  }

  &.--right {
    text-align: right;
  }  
`

export default Section;