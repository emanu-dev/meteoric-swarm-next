import React, {useEffect, useRef, useState} from 'react';
import { motion, useViewportScroll, useTransform } from "framer-motion";

import IconLinkedin from '../src/icons/iconLinkedin.svg';
import IconGithub from '../src/icons/iconGithub.svg';
import IconCodepen from '../src/icons/iconCodepen.svg';

import Main from '../src/components/main'
import Line from '../src/components/line'
import Section from '../src/components/section'
import sectionsHandler from '../src/utils/sectionsHandler'
import Title from '../src/components/title'
import Cursor from "../src/components/cursor";

import Sections from "../src/containers";

const Home = () => {
  const lineElement = useRef(null);
  const mainComponent = useRef(null);
  const cursor = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  const sections = new Map([
    [Sections.About, "About"],
    [Sections.Resume, "Resume"],
    [Sections.Projects, "Projects"],
    [Sections.More, "More"]
  ]);

  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, .15], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, .15], [1, 0]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setActiveSection(sectionsHandler.activeSectionNumber());
    });
    
    sectionsHandler.updateWindowSize(mainComponent, lineElement, sections.size + 2);

    return () => {
      window.removeEventListener("scroll", () => {setActiveSection(sectionsHandler.activeSectionNumber())});
    };
  }, []);

  return (
    <Main ref={mainComponent}>
      <Cursor ref={cursor} />
      <Line ref={lineElement} className='--center' activeSection={activeSection} totalSections={sections.size}>
          <Line.Content>
            <motion.div
              style={{
                y, opacity
              }}> 
              <Line.Text>
                See<br/>More<br/> ᐁ  
              </Line.Text>
            </motion.div>
            <Line.Social>
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
      {[...sections].map(([Component, name], index) => (
        <Component key={index} name={name} count={index+1} cursor={cursor} activeSection={activeSection} />
      ))}
    </Main>
  )
}

export default Home;
