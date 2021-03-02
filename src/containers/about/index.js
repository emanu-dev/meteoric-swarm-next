import React from 'react';
import parse from 'html-react-parser';
import { motion, useViewportScroll, useTransform } from "framer-motion";

import Image from 'next/image';
import Text from '../../components/text';
import db from '../../db.json';
import Section from '../../components/section'

const About = props => {
	
	const { scrollYProgress } = useViewportScroll();
	const y = useTransform(scrollYProgress, [.15, .30], [-30, 30]);
	
	return (
		<Section count={props.count}>
			<Section.Header>About me</Section.Header>
			<Section.Content>
            <motion.div
              style={{
                y: useTransform(scrollYProgress, [.10, .30], [60, -65]),
              }}>
				<Section.Center className='img-wrapper'>
					<Image
						src='/img/me.png'
						width={450}
						height={430}
						alt='Emanuel Prado'
					/>
				</Section.Center>
			</motion.div>				
			<motion.div
              style={{
                y: useTransform(scrollYProgress, [.10, .30], [50, -55]),
              }}>				
				<Text>
					<Text.Header>I'm Emanuel<br/>Prado</Text.Header>
					<Text.Body>{parse(db.about)}</Text.Body>
				</Text>      
			</motion.div>				    
			</Section.Content>
		</Section>
	)
}

export default About;