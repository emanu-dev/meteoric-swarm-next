import React from 'react';
import parse from 'html-react-parser';

import Image from 'next/image';
import Text from '../../components/text';
import db from '../../db.json';
import Section from '../../components/section'

const About = props => {
	return (
		<Section count={props.count}>
			<Section.Header>About me</Section.Header>
			<Section.Content>
				<Section.Center className='img-wrapper'>
					<Image
						src='/img/me.png'
						width={450}
						height={430}
						alt='Emanuel Prado'
					/>
				</Section.Center>
				<Text>
					<Text.Header>I'm Emanuel<br/>Prado</Text.Header>
					<Text.Body>{parse(db.about)}</Text.Body>
				</Text>          
			</Section.Content>
		</Section>
	)
}

export default About;