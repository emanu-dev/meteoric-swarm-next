import styled from 'styled-components';
import React from 'react';
import SectionsHandler from '../../utils/sectionsHandler';

let instancesCount = 0;

const Section =  React.forwardRef((props, ref) => {

  const [thisSectionNumber, setThisSectionNumber] = React.useState(0);
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    setThisSectionNumber(instancesCount);

    window.addEventListener(
      'scroll',
      () => {
        setActive(SectionsHandler.activeSectionNumber() === props.count);
      }
    );

    return () => {
      window.removeEventListener(
        'scroll',
        setActive(SectionsHandler.activeSectionNumber() === props.count)
      );
    }
  }, []);

  return (
    <Section.Wrapper className={active ? '--active' : ''} ref={ref}>
      {React.Children.map(props.children, child => {
        return React.cloneElement(child, {
          active: active,
          className: active ? '--active' : '',
        })
      })}
    </Section.Wrapper>
  )
});

Section.Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

Section.Wrapper = styled.section`
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
  margin: 2rem auto;
  max-width: 1600px;
  opacity: .25;
  padding: 0 2rem;
  text-transform: uppercase;
  
  &.--left {
    text-align: left;
  }

  &.--right {
    text-align: right;
  }  
`
Section.ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  max-width: 160rem;
  margin: 0 auto;
  padding: 4rem 2rem;
  position: relative;
  
  img {
    transition: transform 500ms ease-out;
    transform: translateX(-75%);
  }

  &.--active {
      img {
        transform: translateX(0);
      }
  }

  @media screen and (max-width: 600px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`

Section.ContentWrapper.Full = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0;

  div {
    transition: transform 500ms ease;
    transform: translateY(-75%);
  }

  &.--active {
      div {
        transform: translateX(0);
      }
  }

  @media screen and (max-width: 1000px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;

    div {
      transform: translateX(25%);
    }
  }  
`

Section.Content = props => {
  return (
    <Section.ContentWrapper className={props.active ? '--active' : ''}>
      {React.Children.map(props.children, child => {
        return React.cloneElement(child, {
          active: props.active,
          className: props.active ? '--active' : '',
        })
      })}
    </Section.ContentWrapper>
  )
}

Section.Content.Full = props => {
  return (
    <Section.ContentWrapper.Full className={props.active ? '--active' : ''}>
      {React.Children.map(props.children, child => {
        return React.cloneElement(child, {
          active: props.active,
          className: props.active ? '--active' : '',
        })
      })}
    </Section.ContentWrapper.Full>
  )
}

export default Section;