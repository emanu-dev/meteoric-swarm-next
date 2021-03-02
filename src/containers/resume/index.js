import React from 'react';
import Section from '../../components/section'
import Timeline from '../../components/timeline';
import SkillGroup from '../../components/skillgroup';
import Text from '../../components/text';
import db from '../../db.json';

const Resume = props => {
	return (
		<Section count={props.count}>
			<Section.Header style={{ textAlign: 'right' }}>Resumé</Section.Header>
			<Section.Content>
				<Timeline>
					{db.resume.timeline.map((item, index) => (
						<Timeline.Item key={index} delay={`${(db.resume.timeline.length - index + 1) / 10 + .25}s`}>
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
						<SkillGroup.Item key={index} value={skill.value} delay={`${index / 10 + 1}s`}>
							<Text.Small>{skill.title}</Text.Small>
							<SkillGroup.Progress delay={`${(index + 1) / 10 + 1}s`} />
						</SkillGroup.Item>
					))}
				</SkillGroup>
			</Section.Content>
		</Section>
	)
}

export default Resume;