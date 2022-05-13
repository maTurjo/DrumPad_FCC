"use strict";

const { useEffect } = React;

const e = React.createElement;

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<DrumMachine />
			</div>
		);
	}
}

const DrumMachine = (props) => {
	var playSound = (e) => {
		var buttonText = e.target.textContent;
		console.log(buttonText);

		document.getElementById(buttonText).play();
		document.getElementById("display").innerText = buttonText;
	};

	useEffect(() => {
		document.addEventListener("keypress", (e) => {
			var key = e.key.toUpperCase();
			console.log(key);
			document.getElementById("display").innerText = key;
			document.getElementById(key).play();
		});
	}, []);

	return (
		<div id="drum-machine">
			<div id="display"></div>
			<div className="btn btn-lg btn-secondary drum-pad" onClick={playSound} id="q">
				Q<audio className="clip" id="Q" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/clap.wav" data-key="83"></audio>
			</div>
			<div className="btn btn-lg btn-secondary drum-pad" onClick={playSound} id="w">
				W<audio className="clip" id="W" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/clap.wav" data-key="83"></audio>
			</div>
			<div className="btn btn-lg btn-secondary drum-pad" onClick={playSound} id="e">
				E<audio className="clip" id="E" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/clap.wav" data-key="83"></audio>
			</div>
			<div className="btn btn-lg btn-secondary drum-pad" onClick={playSound} id="a">
				A<audio className="clip" id="A" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/clap.wav" data-key="83"></audio>
			</div>
			<div className="btn btn-lg btn-secondary drum-pad" onClick={playSound} id="s">
				S<audio className="clip" id="S" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/clap.wav" data-key="83"></audio>
			</div>
			<div className="btn btn-lg btn-secondary drum-pad" onClick={playSound} id="d">
				D<audio className="clip" id="D" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/clap.wav" data-key="83"></audio>
			</div>
			<div className="btn btn-lg btn-secondary drum-pad" onClick={playSound} id="z">
				Z<audio className="clip" id="Z" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/clap.wav" data-key="83"></audio>
			</div>
			<div className="btn btn-lg btn-secondary drum-pad" onClick={playSound} id="x">
				X<audio className="clip" id="X" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/clap.wav" data-key="83"></audio>
			</div>
			<div className="btn btn-lg btn-secondary drum-pad" onClick={playSound} id="c">
				C<audio className="clip" id="C" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/clap.wav" data-key="83"></audio>
			</div>
			<h1>Drum Machine</h1>
		</div>
	);
};

const domContainer = document.getElementById("app");
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);
