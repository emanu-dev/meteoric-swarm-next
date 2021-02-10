import styled from "styled-components";
import React from 'react';
import PropTypes from 'prop-types';

const ProjectSlider = styled.div`
  -webkit-overflow-scrolling: touch;
  display: flex;
  height: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  width: 100%;

  &::-webkit-scrollbar {
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

ProjectSlider.Nav = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 140rem;
  width: 80%;
`

ProjectSlider.Nav.Button = styled.label`
  background-color: ${props => props.theme.colors.primary};
  display: inline-block;
  height: 10px;
  width: 20px;
  margin: 10px 0;
  
  &:not(:last-child)  {
    margin-right: 10px;
  }
`

ProjectSlider.Slide = styled.label`
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

ProjectSlider.Content = styled.div`
  position: relative;
  height: 50rem;
  max-width: 60rem;
  z-index: 9;

  @media screen and (max-width: 1000px) {
    padding-left: 2rem;
    top: -5%;
  }  
`

ProjectSlider.Title = styled.h4`
  font-family: "Atkinson Hyperlegible", sans-serif;
  font-size: clamp(42px, 8rem, 80px);
  line-height: 100%;
  margin: 0 0 1rem 0;
  text-align: left;
  text-shadow: 2px 2px 2px #000000;
`

ProjectSlider.Desc = styled.p`
  font-family: "DejaVu Sans", sans-serif;
  font-size: clamp(14px, 2rem, 20px);
  font-weight: 300;
  margin: 0 0 1rem 0;
  padding: 0 .5rem;
  text-align: left;
  width: 300px;
  
  @media screen and (max-width: 1000px) {
    width: auto;
  }
  
`

ProjectSlider.Image = styled.div`
  background: url("${props => props.src}") no-repeat center/cover;
  height: 100%;
  right: 0;
  max-width: 120rem;
  opacity: .6;
  position: absolute;
  width: calc(100% - 40rem);

  @media screen and (max-width: 1000px) {
    position: static;
    height: 55%;
    width: 100%;
  }
`

ProjectSlider.Link = styled.a`
  background: rgba(0, 0, 0, .25);
  border: 1px solid rgba(255, 255, 255, .3);
  box-shadow: 0 0 0 #ffffff;
  color: ${props => props.theme.colors.textContrast};
  cursor: none;
  font-family: "DejaVu Sans", sans-serif;
  font-size: 12px;
  font-weight: 300;
  padding: 10px 20px;
  position: relative;
  top: 20px;
  text-decoration: none;
  text-transform: uppercase;
  transition: box-shadow 300ms ease;
  
  &:hover {
    box-shadow: 2px 2px 0 #ffffff;
  }
`
ProjectSlider.Wrapper = props => {
  return (
    <ProjectSlider.Nav id='project-slider'>
      <div style={{display:'none'}}>
      {props.db.projects.map((project, index) => (
        <input
          type="radio"
          name='slider'
          id={`slide-${index}`}
          key={index}
          defaultChecked={index === 0}/>
      ))}
      </div>
      <ProjectSlider id='project-slider-scroll'>
      {props.db.projects.map((project, index) => (
        <ProjectSlider.Slide
          key={index}
          id={`slide-${index}`}
          htmlFor={`slide-${index}`}
          className={`slider__item slider__item--${index}`}>
          <ProjectSlider.Content>
            <ProjectSlider.Title>{project.name}</ProjectSlider.Title>
            <ProjectSlider.Desc>{project.desc}</ProjectSlider.Desc>
            <ProjectSlider.Link href={project.link}>Check it out</ProjectSlider.Link>
          </ProjectSlider.Content>
          <ProjectSlider.Image src={project.image} />
        </ProjectSlider.Slide>
      ))}
      </ProjectSlider>
      <div>
        {props.db.projects.map((project, index) => (
          <ProjectSlider.Nav.Button
            key={index}
            htmlFor={`slide-${index}`}
            className={`bullets__item bullets__item--${index}`}
            onClick={()=> {
              document.getElementById('slide-4').scrollLeft = 0;
              const slideWidth = document.getElementById('project-slider').offsetWidth;
              document.getElementById('project-slider-scroll').scrollLeft = slideWidth * index;
              console.log(slideWidth * index);
            }}
          />
        ))}
      </div>
    </ProjectSlider.Nav>
  );
}

ProjectSlider.Wrapper.propTypes = {
  db: PropTypes.object.isRequired,
}

export default ProjectSlider;