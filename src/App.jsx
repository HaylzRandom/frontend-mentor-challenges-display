import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

// Data
import { newbie, junior, intermediate, advanced, guru } from './data';

// Component
import Challenge from './components/Challenge';

// Styles
import './App.css';

const App = () => {
	const [newbieOpen, setNewbieOpen] = useState(true);
	const [juniorOpen, setJuniorOpen] = useState(false);
	const [intermediateOpen, setIntermediateOpen] = useState(false);
	const [advancedOpen, setAdvancedOpen] = useState(false);
	const [guruOpen, setGuruOpen] = useState(false);

	const handleClickNewbie = () => {
		setNewbieOpen((prev) => !prev);
	};

	const handleClickJunior = () => {
		setJuniorOpen((prev) => !prev);
	};

	const handleClickIntermediate = () => {
		setIntermediateOpen((prev) => !prev);
	};

	const handleClickAdvanced = () => {
		setAdvancedOpen((prev) => !prev);
	};
	const handleClickGuru = () => {
		setGuruOpen((prev) => !prev);
	};

	return (
		<>
			<header>
				<h1 className='title'>Frontend Mentor Challenges</h1>
				<p className='description'>
					All of the frontend mentor challenges that I have completed thus far!
				</p>
			</header>
			<main>
				<section id='newbie' className='challenge--section'>
					<header className='challenge--header'>
						<div className='challenge--stats'>
							<h2 className='challenge--title--level'>Newbie</h2>
							<span className='challenge--count'>{newbie.length}</span>
						</div>
						<FontAwesomeIcon
							className='icon'
							icon={faChevronCircleDown}
							onClick={handleClickNewbie}
						/>
					</header>
					{newbieOpen && (
						<div className='challenges'>
							{newbie.map((data) => (
								<Challenge data={data} key={data.title} />
							))}
						</div>
					)}
				</section>
				<section id='junior'>
					<header className='challenge--header'>
						<div className='challenge--stats'>
							<h2 className='challenge--title--level'>Junior</h2>
							<span className='challenge--count'>{junior.length}</span>
						</div>
						<FontAwesomeIcon
							className='icon'
							icon={faChevronCircleDown}
							onClick={handleClickJunior}
						/>
					</header>
					{juniorOpen && (
						<div className='challenges'>
							{junior.map((data) => (
								<Challenge data={data} key={data.title} />
							))}
						</div>
					)}
				</section>
				<section id='intermediate'>
					<header className='challenge--header'>
						<div className='challenge--stats'>
							<h2 className='challenge--title--level'>Intermediate</h2>
							<span className='challenge--count'>{intermediate.length}</span>
						</div>
						<FontAwesomeIcon
							className='icon'
							icon={faChevronCircleDown}
							onClick={handleClickIntermediate}
						/>
					</header>
					{intermediateOpen && (
						<div className='challenges'>
							{intermediate.map((data) => (
								<Challenge data={data} key={data.title} />
							))}
						</div>
					)}
				</section>
				<section id='advanced'>
					<header className='challenge--header'>
						<div className='challenge--stats'>
							<h2 className='challenge--title--level'>Advanced</h2>
							<span className='challenge--count'>{advanced.length}</span>
						</div>
						<FontAwesomeIcon
							className='icon'
							icon={faChevronCircleDown}
							onClick={handleClickAdvanced}
						/>
					</header>
					{advancedOpen && (
						<div className='challenges'>
							{advanced.map((data) => (
								<Challenge data={data} key={data.title} />
							))}
						</div>
					)}
				</section>
				<section id='guru'>
					<header className='challenge--header'>
						<div className='challenge--stats'>
							<h2 className='challenge--title--level'>Guru</h2>
							<span className='challenge--count'>{guru.length}</span>
						</div>
						<FontAwesomeIcon
							className='icon'
							icon={faChevronCircleDown}
							onClick={handleClickGuru}
						/>
					</header>
					{guruOpen && (
						<div className='challenges'>
							{guru.map((data) => (
								<Challenge data={data} key={data.title} />
							))}
						</div>
					)}
				</section>
			</main>
		</>
	);
};
export default App;
