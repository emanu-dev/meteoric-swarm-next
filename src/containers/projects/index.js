import React from 'react';
import Section from '../../components/section'
import Slider from '../../components/slider';
import db from '../../db.json';

const Projects = props => {
	return (
		<Section count={props.count}>
			<Section.Header>Projects</Section.Header>
			<Section.Content.Full className='--full'>
				<Slider.Wrapper cursor={props.cursor} db={db} />
			</Section.Content.Full>
		</Section>
	)
}

export default Projects;