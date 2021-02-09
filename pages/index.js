import styled from 'styled-components';
import Image from 'next/image';
import React, {useEffect, useRef} from 'react';
import db from '../src/db.json';

import IconLinkedin from '../src/icons/iconLinkedin.svg';
import IconGithub from '../src/icons/iconGithub.svg';
import IconCodepen from '../src/icons/iconCodepen.svg';

import Main from '../src/components/main'
import Line from '../src/components/line'
import Section from '../src/components/section'
import sectionsHandler from '../src/utils/sectionsHandler'
import Title from '../src/components/title'
import ProjectSlider from "../src/components/project";
import Text from "../src/components/text";
import Cursor from "../src/components/cursor";

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
  const seeMoreElement = useRef(null);
  const mainComponent = useRef(null);
  const debugElement = useRef(null)
  const socialElement = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {sectionsHandler.handleScroll(debugElement, lineElement, seeMoreElement, socialElement)});
    sectionsHandler.updateWindowSize(mainComponent, lineElement);

    return () => {
      window.removeEventListener("scroll", () => {sectionsHandler.handleScroll(debugElement, lineElement, seeMoreElement, socialElement)});
    };
  });

  return (
    <Main ref={mainComponent}>
      <Cursor />
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
          <Line.Social ref={socialElement}>
            <Line.Social.Icon link='https://br.linkedin.com/in/emanuel-prado'><IconLinkedin /></Line.Social.Icon>
            <Line.Social.Icon link='https://codepen.io/emanu-fer'><IconCodepen /></Line.Social.Icon>
            <Line.Social.Icon link='https://github.com/emanu-dev'><IconGithub /></Line.Social.Icon>
          </Line.Social>
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
        <Section.Content className='--full'>
          {/*<Project>*/}
          {/*  <Project.Content>*/}
          {/*    <Project.Title>{db.projects[0].name}</Project.Title>*/}
          {/*    <Project.Desc>{db.projects[0].desc}</Project.Desc>*/}
          {/*    <Project.Link href={db.projects[0].link}>Check it out</Project.Link>*/}
          {/*  </Project.Content>*/}
          {/*  <Project.Image src={db.projects[0].image} />*/}
          {/*</Project>*/}
          <ProjectSlider.Wrapper db={db}/>
        </Section.Content>
      </Section>
      <Section>
        <Section.Header className='--right'>More</Section.Header>
      </Section>
    </Main>
  )
}

export default Home;
