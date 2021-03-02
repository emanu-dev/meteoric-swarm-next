import styled from 'styled-components';
import Image from 'next/image';
import parse from 'html-react-parser';
import React, {useEffect, useRef, useState} from 'react';
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
  const mainComponent = useRef(null);
  const debugElement = useRef(null)
  const socialElement = useRef(null);
  const cursor = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      sectionsHandler.handleScroll(debugElement, lineElement);
      setActiveSection(sectionsHandler.activeSectionNumber());
    });
    
    sectionsHandler.updateWindowSize(mainComponent, lineElement);

    return () => {
      window.removeEventListener("scroll", () => {sectionsHandler.handleScroll(debugElement, lineElement)});
    };
  }, []);

  return (
    <Main ref={mainComponent}>
      <Cursor ref={cursor} />
      <Debug ref={debugElement}>Debug</Debug>
      <Line ref={lineElement} className='--center'>
          <Line.Content>
            <Line.Text>
              See<br/>More<br/> ᐁ
            </Line.Text>
            <Line.Social ref={socialElement}>
            <Line.Text>
              Find Me
            </Line.Text>
              <Line.Social.Icon cursor={cursor} link='https://br.linkedin.com/in/emanuel-prado'><IconLinkedin /></Line.Social.Icon>
              <Line.Social.Icon cursor={cursor} link='https://codepen.io/emanu-fer'><IconCodepen /></Line.Social.Icon>
              <Line.Social.Icon cursor={cursor} link='https://github.com/emanu-dev'><IconGithub /></Line.Social.Icon>
            </Line.Social>
          </Line.Content>
      </Line>
      <Section.Main>
        <Title>
          <Title.Path/>
        </Title>
      </Section.Main>
      <Section count={1}>
        <Section.Header>About me</Section.Header>
        <Section.Content>
          <Center className='img-wrapper'>
            <Image
                  src='/img/me.png'
                  width={450}
                  height={430}
                  alt='Emanuel Prado'
                />
          </Center>
          <Text>
            <Text.Header>I'm Emanuel<br/>Prado</Text.Header>
            <Text.Body>{parse(db.about)}</Text.Body>
          </Text>          
        </Section.Content>
      </Section>
      <Section count={2}>
        <Section.Header style={{textAlign: 'right'}}>Resumé</Section.Header>
          <Section.Content>
          <Timeline>
              {db.resume.timeline.map((item, index) => (
                <Timeline.Item key={index} delay={`${(db.resume.timeline.length - index + 1)/10 + .25}s`}>
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
              <SkillGroup.Item key={index} value={skill.value} delay={`${index/10 + .25}s`}>
                <Text.Small>{skill.title}</Text.Small>
                <SkillGroup.Progress delay={`${(index+1)/10 + .25}s`} />
              </SkillGroup.Item>
            ))}
          </SkillGroup>
        </Section.Content>
      </Section>
      <Section count={3}>
        <Section.Header>Projects</Section.Header>
        <Section.Content.Full className='--full'>
          <Slider.Wrapper cursor={cursor} db={db}/>
        </Section.Content.Full>
      </Section>
      <Section count={4}>
        <Section.Header style={{textAlign: 'right'}}>More</Section.Header>
        <Section.Content>
          <Text>
              <Text.Header>{db.more.title}</Text.Header>
              <Text.Body>{parse(db.more.body)}</Text.Body>
            </Text>          
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
