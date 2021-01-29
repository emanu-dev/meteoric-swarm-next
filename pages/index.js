import styled from 'styled-components';
import Image from 'next/image';
import React, {useEffect, useRef} from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import Main from '../src/components/main'
import Line from '../src/components/line'
import Section from '../src/components/section'
import sectionsHandler from '../src/utils/sectionsHandler'
import Title from '../src/components/title'

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
`
Text.Body = styled.p`
  color: ${props => props.theme.colors.textContrast};
  font-family: 'DejaVuSans', sans-serif;
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 120%;
`

const Home = () => {

  const lineElement = useRef(null);
  const mainComponent = useRef(null);
  const debugElement = useRef(null)

  useEffect(() => {
    window.addEventListener("scroll", () => {sectionsHandler.handleScroll(debugElement, lineElement)});
    sectionsHandler.updateWindowSize(mainComponent, lineElement);
    return () => {
      window.removeEventListener("scroll", () => {sectionsHandler.handleScroll(debugElement, lineElement)});
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
          <Title.Text className='--size-lg'>design</Title.Text>
        </Title>
      </Section.Main>
      <Section>
        <Section.Header className='--left'>About me</Section.Header>
        <Section.Content>
          <Text>
            <Text.Header>Emanuel<br/>Prado</Text.Header>
            <Text.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text.Body>
          </Text>
          <Image
            src='/img/me.png'
            width={588}
            height={845}
          />
        </Section.Content>
      </Section>
      <Section>
        <Section.Header className='--right'>Passions</Section.Header>
      </Section>
      <Section>
        <Section.Header className='--left'>Projects</Section.Header>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={3}
        >
          <Slider>
            <Slide index={0}>I am the first Slide.</Slide>
            <Slide index={1}>I am the second Slide.</Slide>
            <Slide index={2}>I am the third Slide.</Slide>
          </Slider>
        </CarouselProvider>
      </Section>
      <Section>
        <Section.Header className='--right'>More</Section.Header>
      </Section>
    </Main>
  )
}

export default Home;
