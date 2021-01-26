import styled from 'styled-components'
import { useEffect, useRef } from 'react'

const Main = styled.main`
  background: linear-gradient(180deg, #000000 0%, #1F0027 100%);
  height: 2160px;
  margin: 0;
  min-height: 100vh;
  overflow-y: hidden;
  position: relative;
`
const Debug = styled.div`
  background-color: #2c2c2c;
  color: #fff;
  font-family: sans-serif;
  padding: 10px 15px;
  position: fixed;
  text-transform: uppercase;
  z-index: 9999;
`
const Line = styled.div`
  position: absolute;
  background-color: #fff;
  height: 0px;
  width: 2px;
  left: 50vw;
  transition: transform 300ms ease;
  z-index: 999;

  &.--center {
    top: 60vh;
    left: 50vw;
  }

  &.--left {
    top: 50vh;
    transform: translate(-50vw) translate(60px);
  }

  &.--right {
    top: 50vh;
    transform: translate(50vw) translate(-60px);
  }
`

const Section = styled.section`
  background-color: rgba(255, 255, 255, 0.5);
  height: 720px;
  opacity: 0;
  transition: opacity 300ms ease;
  width: 100%;

  &.--active {
    opacity: 1;
  }  
`
Section.Main = styled.section`
  background-color: transparent;
  opacity: 1;
`

const Home = () => {

  const SECTION_HEIGHT = 720;
  const lineElement = useRef(null);
  const mainComponent = useRef(null);
  const debugElement = useRef(null);

  //change
  let pageHeight;
  let pagePercentage;
  let sectionCount = 1;
  let sectionList;

  const getWindowSize = () => {
    return document.documentElement.scrollHeight;
  }

  const isWithinSections = () => {
    return (document.documentElement.scrollTop > SECTION_HEIGHT - (SECTION_HEIGHT/3) && !(document.documentElement.scrollTop + window.innerHeight + (SECTION_HEIGHT/3) >= getWindowSize()));
  }

  const getSectionNumbering = () => {
    return Math.floor((document.documentElement.scrollTop + SECTION_HEIGHT/3)/SECTION_HEIGHT);
  }

  const updateWindowSize = () => {
    sectionList = document.querySelectorAll('section');
    sectionCount = sectionList.length;
    console.log(sectionList);

    pageHeight = SECTION_HEIGHT*sectionCount+(SECTION_HEIGHT/2);
    mainComponent.current.style.height = `${pageHeight}px`;
    lineElement.current.style.height = `${pageHeight-SECTION_HEIGHT*1.25}px`;
  }

  const updateSectionsVisibility = () => {
    if (!isWithinSections() || getSectionNumbering() === 0) {
      lineElement.current.classList.remove('--right', '--left');
      lineElement.current.classList.add('--center');

      [].map.call(sectionList, (element) => {
        element.classList.remove('--active');
      });

    } else {
      if (getSectionNumbering() % 2 === 1) {
        lineElement.current.classList.remove('--center', '--right');
        lineElement.current.classList.add('--left');
      } else if (getSectionNumbering() % 2 === 0) {
        lineElement.current.classList.remove('--center', '--left');
        lineElement.current.classList.add('--right');
      }

      sectionList.forEach( (element, index) => {
        if (index == getSectionNumbering()) {
          element.classList.add('--active');
        }else {
          element.classList.remove('--active');
        }
      })
    }
  }

  const handleScroll = () => {
    pagePercentage = Math.floor((document.documentElement.scrollTop/pageHeight)*100);
    let debugString = `ScrollPos ${document.documentElement.scrollTop} | ScrollCalc #${Math.floor(document.documentElement.scrollTop/SECTION_HEIGHT)}`;

    debugElement.current.textContent = debugString;

    updateSectionsVisibility();
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    updateWindowSize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Main ref={mainComponent}>
      <Debug ref={debugElement}>Debug</Debug>
      <Line ref={lineElement} className='--center' />
      <Section.Main></Section.Main>
      <Section></Section>
      <Section></Section>
      <Section></Section>
      <Section></Section>
      <Section></Section>
      <Section></Section>
      <Section></Section>
      <Section></Section>
      <Section></Section>
      <Section></Section>
      <Section></Section>
      <Section></Section>
      <Section></Section>
    </Main>
  )
}

export default Home;
