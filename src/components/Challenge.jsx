import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
					<li key={skill} className='challenge--skill'>
						{skill}
					</li>
				))}
			</ul>
			<p className='challenge--description'>{description}</p>
			<div className='challenge--links'>
				<a href={demo} className='challenge--demo link'>
					<FontAwesomeIcon icon={faDesktop} />
				</a>
				<a href={github} className='challenge--github link'>
					<FontAwesomeIcon icon={faGithub} />
				</a>
			</div>
		</div>
	);
};
export default Challenge;
