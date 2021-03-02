import React from 'react';
import parse from 'html-react-parser';
import { motion, useViewportScroll, useTransform } from "framer-motion";

import Image from 'next/image';
import Section from '../../components/section';
import Text from "../../components/text";
import db from '../../db.json';

const More = props => {
	const { scrollYProgress } = useViewportScroll();
	const y = useTransform(scrollYProgress, [.15, .30], [-30, 30]);

	return (
		<Section count={props.count}>
			<Section.Header style={{ textAlign: 'right' }}>More</Section.Header>
			<Section.Content>
				<motion.div
					style={{
						y: useTransform(scrollYProgress, [.10, .30], [-45, 40]),
					}}>
					<Text>
						<Text.Header>{db.more.title}</Text.Header>
						<Text.Body>{parse(db.more.body)}</Text.Body>
					</Text>
				</motion.div>
				<motion.div
					style={{
						y: useTransform(scrollYProgress, [.10, .30], [-65, 60]),
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