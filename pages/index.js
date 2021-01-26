import styled from 'styled-components'
import Head from 'next/head'
import React, {useEffect, useRef} from 'react'

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
      </Section>
      <Section>
        <Section.Header className='--right'>Passions</Section.Header>
      </Section>
      <Section>
        <Section.Header className='--left'>Projects</Section.Header>
      </Section>
      <Section></Section>
      <Section></Section>
      <Section></Section>
      <Section></Section>
      <Section></Section>
    </Main>
  )
}

export default Home;
