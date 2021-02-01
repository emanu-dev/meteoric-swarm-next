import styled from 'styled-components';
import Image from 'next/image';
import React, {useEffect, useRef} from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import db from '../src/db.json';

import Main from '../src/components/main'
import Line from '../src/components/line'
import Section from '../src/components/section'
import sectionsHandler from '../src/utils/sectionsHandler'
import Title from '../src/components/title'
import Project from "../src/components/project";

const Debug = styled.div`
  background-color: #2c2c2c;
  color: #fff;
  font-family: sans-serif;
  padding: 10px 15px;
  position: fixed;
  text-transform: uppercase;
  z-index: 9999;
`

const Text = styled.div`
  align-self: stretch;
  color: ${props => props.theme.colors.textContrast};
  display: flex;
  flex-direction: column;
`
Text.Header = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-family: 'Atkinson Hyperlegible', sans-serif;
  font-size: 7rem;
  line-height: 90%;
  margin: 0;
  text-transform: uppercase;

  @media screen and (max-width: 600px) {
    font-size: 4rem;  
  }
`
Text.Body = styled.p`
  color: ${props => props.theme.colors.textContrast};
  font-family: 'DejaVuSans', sans-serif;
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 120%;

  @media screen and (max-width: 600px) {
    font-size: 1.6rem;
  }  
`

const Home = () => {

  const lineElement = useRef(null);
  const seeMoreElement = useRef(null);
  const mainComponent = useRef(null);
  const debugElement = useRef(null)

  useEffect(() => {
    window.addEventListener("scroll", () => {sectionsHandler.handleScroll(debugElement, lineElement, seeMoreElement)});
    sectionsHandler.updateWindowSize(mainComponent, lineElement);
    return () => {
      window.removeEventListener("scroll", () => {sectionsHandler.handleScroll(debugElement, lineElement, seeMoreElement)});
    };
  });

  return (
    <Main ref={mainComponent}>
      <Debug ref={debugElement}>Debug</Debug>
      <Line ref={lineElement} className='--center' />
      <Section.Main>
        <Title>
          <Title.Text className='--size-md'>blurring the<br/>line between</Title.Text>
          <Title.Tags>
            <Title.Tags.Tag>web </Title.Tags.Tag>
            <Title.Tags.Tag>graphic</Title.Tags.Tag>
            <Title.Tags.Tag> game</Title.Tags.Tag>
          </Title.Tags>
          <Title.Text className='--size-lg --glitched'>design</Title.Text>
          <Line.SeeMore ref={seeMoreElement} className='--active'>
            See<br/>More<br/> ᐁ
          </Line.SeeMore>
        </Title>
      </Section.Main>
      <Section>
        <Section.Header className='--left'>About me</Section.Header>
        <Section.Content>
          <Text>
            <Text.Header>Emanuel<br/>Prado</Text.Header>
            <Text.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text.Body>
          </Text>
          <div>
            <Image
              src='/img/me.png'
              width={588}
              height={845}
            />
          </div>
        </Section.Content>
      </Section>
      <Section>
        <Section.Header className='--right'>Passions</Section.Header>
      </Section>
      <Section>
        <Section.Header className='--left'>Projects</Section.Header>
        <Section.Content className='--spread'>
          <CarouselProvider
            totalSlides={db.projects.length}
            isIntrinsicHeight={true}
          >
            <Slider>
              {db.projects.map( (project, index) => {
                return(
                  <Slide index={index} key={index} className=''>
                    <Project>
                      <Project.Content>
                        <Project.Title>{project.name}</Project.Title>
                        <Project.Desc>{project.desc}</Project.Desc>
                      </Project.Content>
                      <Project.Image src={project.image} />
                    </Project>
                  </Slide>
                )
              })}
            </Slider>
            <DotGroup />
          </CarouselProvider>
        </Section.Content>
      </Section>
      <Section>
        <Section.Header className='--right'>More</Section.Header>
      </Section>
    </Main>
  )
}

export default Home;
