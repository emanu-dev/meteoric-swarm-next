import React from 'react';
import parse from 'html-react-parser';

import Image from 'next/image';
import Section from '../../components/section';
import Text from "../../components/text";
import db from '../../db.json';

const More = props => {
	return (
		<Section count={props.count}>
			<Section.Header style={{ textAlign: 'right' }}>More</Section.Header>
			<Section.Content>
				<Text>
					<Text.Header>{db.more.title}</Text.Header>
					<Text.Body>{parse(db.more.body)}</Text.Body>
				</Text>
				<Section.Center>
					<Image
						src='/img/projects/placeholder.jpg'
						width={550}
						height={390}
						alt='Emanuel Prado'
					/>
				</Section.Center>
			</Section.Content>
		</Section>
	)
}

export default More;