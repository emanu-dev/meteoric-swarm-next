import React from 'react';
import parse from 'html-react-parser';
import { motion, useViewportScroll, useTransform } from "framer-motion";

import sectionsHandler from '../../utils/sectionsHandler';

import Image from 'next/image';
import Text from '../../components/text';
import db from '../../db.json';
import Section from '../../components/section'

const About = props => {

	const { scrollYProgress } = useViewportScroll();
	const [sectionRange, setSectionRange] = React.useState([]);

	React.useEffect(() => {
		setSectionRange(
			sectionsHandler.getSectionRange(props.count).map((item) => {
				return item / sectionsHandler.getPageHeight(props.totalSections);
			})
		);
	}, [])

	return (
		<Section count={props.count}>
			<Section.Header>About me</Section.Header>
			<Section.Content>
				<motion.div
					style={{
						rotateZ: useTransform(scrollYProgress, [sectionRange[0], sectionRange[1]], [-15, 15]),
						scale: useTransform(scrollYProgress, [sectionRange[0], sectionRange[1]], [.8, 1.2]), 
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
				<Text>
					<Text.Header>I'm Emanuel<br />Prado</Text.Header>
					<Text.Body>{parse(db.about)}</Text.Body>
				</Text>
			</Section.Content>
		</Section>
	)
}

export default About;