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
  z-index: 9999;

  @media screen and (max-width: 600px) {
    top: 15px;
    position: absolute;
    transform: scale(.8);
  }
`

Slider.Nav.Button = styled.div`
  border: 1px solid ${props => props.theme.colors.primary};
  height: 40px;
  margin: 10px 0;
  width: 20px;
  
  > p {
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
  const sliderButtonSlide = useRef(null);

  const [slideWidth, setSlideWidth] = useState(0);
  const [sliderScrollPosition, setSliderScrollPosition] = useState(0);
  const [sliderButtonScrollPosition, setSliderButtonScrollPosition] = useState(0);

  useEffect(() => {
    setSliderScrollPosition(sliderScroll.current.scrollLeft);
    setSlideWidth(sliderNav.current.offsetWidth);
  })

  return (
    <Slider.Nav ref={sliderNav}>
      <Slider ref={sliderScroll} onScroll={() => {
        setSliderScrollPosition(sliderScroll.current.scrollLeft);
        setSliderButtonScrollPosition(sliderScrollPosition/props.db.projects.length);
      }}>
      {props.db.projects.map((project, index) => (
        <Slider.Slide
          key={index}
          >
          <Project>
            <Project.Title>{project.name}</Project.Title>
            <Project.Desc>{project.desc}</Project.Desc>
            <Project.Link href={project.link} rel='noopener norefferer' target='_blank'>Check it out</Project.Link>
          </Project>
          <Project.Image src={project.image} />
        </Slider.Slide>
      ))}
      </Slider>
      <Slider.Nav.ButtonGroup>
        <Slider.Nav.ButtonSlide
          ref={sliderButtonSlide}
          style={{transform: `translateX(${sliderButtonScrollPosition}px)`, width: `${slideWidth/props.db.projects.length}px`}} />
        {props.db.projects.map((project, index) => (
          <Slider.Nav.Button
            key={index}
            style={{width: `${slideWidth/props.db.projects.length}px`}}
            onClick={()=> {
              sliderScroll.current.scrollLeft = slideWidth * index;
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