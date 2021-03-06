import styled from "styled-components";
import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Project from './project';

const slideMargin = 100;

const Slider = styled.div`
  -webkit-overflow-scrolling: touch;
  display: flex;
  height: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  width: 100%;
  
  &.--anim {
    opacity: 0;
    transform: scale(.25) skew(25deg);
    transition: transform 500ms ease-in-out, opacity 500ms ease-in;

    &.--on-screen {
      opacity: 1;
      transform: scale(1) skew(0deg);
    }
  }

  @media screen and (max-width: 600px) {
    margin-top: 50px;
  } 

  &::-webkit-scrollbar {
    display: none;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 0;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
`;

Slider.Nav = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 140rem;
  width: 80%;
  
  @media screen and (max-width: 600px) {
    position: relative;
    width: 100%;
  }   
`

Slider.Nav.ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  @media screen and (max-width: 600px) {
    top: 15px;
    position: absolute;
    width: 85vw;
  }
`

Slider.Nav.Button = styled.div`
  border: 1px solid ${props => props.theme.colors.textContrastShaded};
  background-color: transparent;
  height: 40px;
  margin: 10px 0;
  position: relative;
  width: 20px;
  z-index: 9;

  &:before {
    content: ' ';
    background-color: ${props => props.theme.colors.textContrast};
    position:absolute;
    left: unset;
    right: 0;
    top: 0;
    height: 100%;
    width: 0%;
    z-index: -1;
    transition: width 300ms ease;
  }

  > p {
    pointer-events: none;
    color: ${props => props.theme.colors.textContrastShaded};
    font-family: 'DejaVuSans', sans-serif;
    font-size: 1.5rem;
    font-weight: 200;
    line-height: 130%;
    margin: 1rem 0 0 1rem;
    transition: font-size 300ms ease;
  }

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 2px 2px 0 ${props => props.theme.colors.primary};
  }
  
  &:not(:last-child)  {
    margin-right: 20px;
  }

  &.--anim {
    opacity: 0;
    transform: translateY(100%);
    transition: transform 500ms ease-out, opacity 500ms ease-in-out;

    &.--on-screen {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &.--active {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 2px 2px 0 ${props => props.theme.colors.primary};
    
    &:before {
      left: 0;
      right: unset;
      width: 100%;
    }
    
    > p {
      font-family: 'Atkinson Hyperlegible', sans-serif;
      font-weight: 700;
      font-size: 2rem;
      color: ${props => props.theme.colors.primary};
      line-height: 110%;
    }
  }
  
  @media screen and (max-width: 600px) {
    border: none;
    background-color: ${props => props.theme.colors.primary};    
    height: 4px;
    opacity: .25;
    pointer-events: none;
    transition: all 300ms ease, transform 500ms ease-in-out;

    > p {
        display: none;
    }

    &.--anim {
      &.--on-screen {
        opacity: .25;

        &.--active-mobile {
          opacity: .5;
        }        
      }   
    }

    &.--active {
      &:before {
        display: none;
      }
    }

    &.--active-mobile {
      background-color: ${props => props.theme.colors.textContrast};
    }    
  }    
`

Slider.Slide = styled.div`
  scroll-snap-align: start;
  color: ${props => props.theme.colors.textContrast};
  display: flex;
  justify-content: flex-start;
  height: 100%;
  margin-right: ${slideMargin}px;
  max-width: 140rem;
  padding: 0 5rem;
  position: relative;
  width: 100%;
  flex-shrink: 0;
  transition: transform 300ms ease;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    padding: 1rem 0;
  }
`;


Slider.Wrapper = props => {
  
  const sliderNav = useRef(null);
  const sliderScroll = useRef(null);
  const sliderButtonGroup = useRef(null);

  const [slideWidth, setSlideWidth] = useState(0);
  const [sliderScrollPosition, setSliderScrollPosition] = useState(0);

  const update = () => {
    setSliderScrollPosition(sliderScroll.current.scrollLeft);
    setSlideWidth(sliderNav.current.offsetWidth);
  }

  useEffect(() => {
    update();
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('resize', update);
    }
  }, []);

  return (
    <Slider.Nav ref={sliderNav}>
      <Slider ref={sliderScroll} className={`--anim ${props.active ? '--on-screen' : '' }`} onScroll={() => {
        setSliderScrollPosition(sliderScroll.current.scrollLeft);
      }}>
        
      {props.db.projects.map((project, index) => (
        <Slider.Slide
          key={index}
          >
          <Project>
            <Project.Title>{project.name}</Project.Title>
            <Project.Desc>{project.desc}</Project.Desc>
            <Project.Link 
              href={project.link}
              rel='noopener norefferer'
              target='_blank'
              onMouseEnter={() => props.cursor.current.classList.add('--active')} 
              onMouseLeave={() => props.cursor.current.classList.remove('--active')}              
            >
              Check it out
            </Project.Link>
          </Project>
          <Project.Image src={project.image} />
        </Slider.Slide>
      ))}
      </Slider>
      <Slider.Nav.ButtonGroup ref={sliderButtonGroup}>
        {props.db.projects.map((project, index) => (
          <Slider.Nav.Button
            onMouseEnter={() => props.cursor.current.classList.add('--active')} 
            onMouseLeave={() => props.cursor.current.classList.remove('--active')}
            className={
              `--anim ${props.active ? '--on-screen' : ''} ${Math.round(sliderScrollPosition/(slideWidth + slideMargin)) === index ? '--active --active-mobile' : ''}`
            }
            key={index}
            style={{
              width: `${slideWidth/props.db.projects.length}px`, 
              transitionDelay: `${.5 + index/5}s`}
            }
            onClick={() => {
              sliderScroll.current.scrollLeft = (slideWidth + slideMargin) * index;
            }}
          ><p>{index+1}</p>
          </Slider.Nav.Button>
        ))}
      </Slider.Nav.ButtonGroup>
    </Slider.Nav>
  );
}

Slider.Wrapper.propTypes = {
  db: PropTypes.object.isRequired,
}

export default Slider;