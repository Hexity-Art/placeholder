import './App.css';
import Tilt from 'react-tilt'
import discord from './assets/discord_white.png';
import twitter from './assets/twitter_white.png';

const App = () => {
	return (
		<div className = "App">
			<Tilt options={{ max : 2, scale : 1, transition: false }} className = "Main" >
				<Ticker />
				<Main />
			</Tilt>
		</div>
	);
}

const Ticker = () => {
	return (
		<div className = "Ticker" >
			<span>
				WE’RE WORKING ON IT • WE’RE WORKING ON IT • WE’RE WORKING ON IT • WE’RE WORKING ON IT • WE’RE WORKING ON IT • WE’RE WORKING ON IT •
			</span>
		</div>
	)
}

const Main = () => {
	return (
		
			<div className = "Container" >
				<div className = "Header" >
					<span>coming soon</span>
					<span className = "SocialRow" >
						<a href = "https://discord.gg/n9wCaPHhUA" target = "_blank" rel = "noopener noreferrer" >
							<img src = { discord } alt = "discord" />
						</a>
						<a href = "https://twitter.com/HexityArt" target = "_blank" rel = "noopener noreferrer" >
							<img src = { twitter } alt = "twitter" />
						</a>
					</span>
				</div>
				<div className = "Content" >
					<span className = "Hexity" >hexity</span>
				</div>
				<div className = "Footer" >
					<span>A community driven auction house focused on breaking down barriers for artists and new digital art collectors.</span>
					<span>coming soon</span>
				</div>
			</div>
		
	)
}

export default App;