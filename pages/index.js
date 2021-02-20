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
import Slider from "../src/components/slider";
import Text from "../src/components/text";
import Cursor from "../src/components/cursor";
import Timeline from "../src/components/timeline";
import SkillGroup from "../src/components/skillgroup";
import Video from '../src/components/videoBg';

const Debug = styled.div`
  background-color: #2c2c2c;
  color: #fff;
  display: none;
  font-family: sans-serif;
  padding: 10px 15px;
  position: fixed;
  text-transform: uppercase;
  z-index: 9999;
`

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Home = () => {

  const lineElement = useRef(null);
  const seeMoreElement = useRef(null);
  const mainComponent = useRef(null);
  const debugElement = useRef(null)
  const socialElement = useRef(null);
  const cursor = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      sectionsHandler.handleScroll(debugElement, lineElement, seeMoreElement, socialElement);
    });
    sectionsHandler.updateWindowSize(mainComponent, lineElement);

    return () => {
      window.removeEventListener("scroll", () => {sectionsHandler.handleScroll(debugElement, lineElement, seeMoreElement, socialElement)});
    };
  });

  return (
    <Main ref={mainComponent}>
      <Video />
      <Cursor ref={cursor} />
      <Debug ref={debugElement}>Debug</Debug>
      <Line ref={lineElement} className='--center' />
      <Section.Main>
        <Title>
          <Title.Path/>
          <Line.SeeMore ref={seeMoreElement} className='--active'>
            See<br/>More<br/> ᐁ
          </Line.SeeMore>
          <Line.Social ref={socialElement}>
            <Line.Social.Icon cursor={cursor} link='https://br.linkedin.com/in/emanuel-prado'><IconLinkedin /></Line.Social.Icon>
            <Line.Social.Icon cursor={cursor} link='https://codepen.io/emanu-fer'><IconCodepen /></Line.Social.Icon>
            <Line.Social.Icon cursor={cursor} link='https://github.com/emanu-dev'><IconGithub /></Line.Social.Icon>
          </Line.Social>
        </Title>
      </Section.Main>
      <Section>
        <Section.Header className='--left'>About me</Section.Header>
        <Section.Content>
          <Center>
            <Image
                  src='/img/me.png'
                  width={450}
                  height={430}
                  alt='Emanuel Prado'
                />
          </Center>
          <Center>
            <Text>
              <Text.Header>I'm Emanuel<br/>Prado</Text.Header>
              <Text.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text.Body>
            </Text>          
          </Center>
        </Section.Content>
      </Section>
      <Section>
        <Section.Header className='--right'>Resume</Section.Header>
          <Section.Content>
          <Timeline>
              {db.resume.timeline.map((item, index) => (
                <Timeline.Item key={index}>
                  <Text.Small>{item.period}</Text.Small>
                  <Text.SmallHeader>{item.title}</Text.SmallHeader>
                  <Text.Body>{item.place}</Text.Body>
                  {item.location !== "" && <Text.Small><em>{item.location}</em></Text.Small>}
                </Timeline.Item>
              ))}
          </Timeline>            
          <SkillGroup>
            <Text.SmallHeader>skills</Text.SmallHeader>
            {db.resume.skills.map((skill, index) => (
              <SkillGroup.Item key={index}>
                <Text.Small>{skill.title}</Text.Small>
                <SkillGroup.Progress value={skill.value} />
              </SkillGroup.Item>
            ))}
          </SkillGroup>
        </Section.Content>
      </Section>
      <Section>
        <Section.Header className='--left'>Projects</Section.Header>
        <Section.Content className='--full'>
          <Slider.Wrapper cursor={cursor} db={db}/>
        </Section.Content>
      </Section>
      <Section>
        <Section.Header className='--right'>More</Section.Header>
        <Section.Content>
          <Center>
          <Text>
              <Text.Header>There is more...</Text.Header>
              <Text.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text.Body>
            </Text>          
          </Center>
          <Center>
          <Image
              src='/img/projects/placeholder.jpg'
              width={550}
              height={390}
              alt='Emanuel Prado'
            />
          </Center>
        </Section.Content>
      </Section>
    </Main>
  )
}

export default Home;
