// Styles
import './challenge.css';

const Challenge = ({ data }) => {
	const {
		title,
		description,
		skills,
		challenge,
		demo,
		github,
		imageSrc,
		imageAlt,
	} = data;

	return (
		<div className='challenge'>
			<img src={imageSrc} alt={imageAlt} className='challenge--image' />
			<h3 className='challenge--title'>
				<a href={challenge} className='link'>
					{title}
				</a>
			</h3>
			<ul className='challenge--skills'>
				{skills.map((skill) => (
					<li key={skill} className='challenge-skill'>
						{skill}
					</li>
				))}
			</ul>
			<p className='challenge--description'>{description}</p>
			<div className='challenge--links'>
				<a href={demo} className='challenge--demo link'>
					Demo
				</a>
				<a href={github} className='challenge--github link'>
					GitHub
				</a>
			</div>
		</div>
	);
};
export default Challenge;
