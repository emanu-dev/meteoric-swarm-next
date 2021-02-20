import styled from "styled-components";
import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Project from './project';

const Slider = styled.div`
  -webkit-overflow-scrolling: touch;
  display: flex;
  height: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  width: 100%;
  
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
    transform: scale(.8);
  }
`

Slider.Nav.Button = styled.div`
  border: 1px solid ${props => props.theme.colors.primary};
  background-color: transparent;
  position: relative;
  height: 40px;
  margin: 10px 0;
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
    margin: 1rem 0 0 1rem;
  }

  @media screen and (max-width: 600px) {
    pointer-events: none;
    height: 4px;

    > p {
        display: none;
    }
}

  &:hover {
    border-color: ${props => props.theme.colors.textContrastShaded};
  }
  
  &:not(:last-child)  {
    margin-right: 20px;
  }

  &.--active {

    &:before {
      left: 0;
      right: unset;
      width: 100%;
    }
    
    > p {
      color: ${props => props.theme.colors.primary};
    }
  }  
`

Slider.Nav.ButtonSlide = styled.div`
  background-color: ${props => props.theme.colors.textContrast};
  left: 0;
  height: 40px;
  margin: 10px 0;
  position: absolute;
  transform: translateX(0);
  transition: transform 300ms ease, width 300ms ease;
  width: 20px;
  will-change: transform, width;
  
  @media screen and (max-width: 600px) {
    pointer-events: none;
    height: 4px;
}
`

Slider.Slide = styled.div`
  scroll-snap-align: start;
  color: ${props => props.theme.colors.textContrast};
  display: flex;
  justify-content: flex-start;
  height: 100%;
  max-width: 140rem;
  padding: 0 5rem;
  position: relative;
  width: 100%;
  flex-shrink: 0;
  transition: transform 300ms ease;
  
  &:not(:last-child)  {
    margin-right: 100px;
  }

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
  })

  return (
    <Slider.Nav ref={sliderNav}>
      <Slider ref={sliderScroll} onScroll={() => {
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
            className={index === 0 && '--active'}
            key={index}
            style={{width: `${slideWidth/props.db.projects.length}px`}}
            onClick={(e)=> {
              sliderScroll.current.scrollLeft = slideWidth * index;
                
                e.target.parentElement.childNodes.forEach(element => {
                  element.classList.remove('--active');
                });
              
              e.target.classList.add('--active');
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