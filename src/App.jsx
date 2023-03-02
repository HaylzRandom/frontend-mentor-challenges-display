import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

// Data
import { newbie, junior, intermediate, advanced, guru } from './data';

// Component
import Challenge from './components/Challenge';

// Styles
import './App.css';

const App = () => {
	return (
		<main>
			<header>
				<h1 className='title'>Frontend Mentor Challenges</h1>
				<p className='description'>
					All of the frontend mentor challenges that I have completed thus far!
				</p>
			</header>

			<section id='newbie'>
				<header className='challenge--header'>
					<div className='challenge--info'>
						<h2 className='challenge--title--level'>Newbie</h2>
						<span className='challenge--count'>{newbie.length}</span>
					</div>
					<FontAwesomeIcon className='icon' icon={faChevronCircleDown} />
				</header>

				<div className='challenges'>
					{newbie.map((data) => (
						<Challenge data={data} key={data.title} />
					))}
				</div>
			</section>
		</main>
	);
};
export default App;
