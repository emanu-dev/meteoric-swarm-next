import React from 'react';
import parse from 'html-react-parser';
import { motion, useViewportScroll, useTransform } from "framer-motion";

import sectionsHandler from '../../utils/sectionsHandler';

import Image from 'next/image';
import Section from '../../components/section';
import Text from "../../components/text";
import db from '../../db.json';

const More = props => {
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
			<Section.Header style={{ textAlign: 'right' }}>More</Section.Header>
			<Section.Content>
				<Text>
					<Text.Header>{db.more.title}</Text.Header>
					<Text.Body>{parse(db.more.body)}</Text.Body>
				</Text>
				<motion.div
					style={{
						rotateZ: useTransform(scrollYProgress, [sectionRange[0], sectionRange[1]], [15, -15]),
						scale: useTransform(scrollYProgress, [sectionRange[0], sectionRange[1]], [.8, 1.2]), 
					}}>
					<Section.Center>
						<Image
							src='/img/projects/placeholder.jpg'
							width={550}
							height={390}
							alt='Emanuel Prado'
						/>
					</Section.Center>
				</motion.div>
			</Section.Content>
		</Section>
	)
}

export default More;