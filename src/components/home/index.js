import { h, Component } from 'preact';
import style from './style.less';

const getJSON = (url, success, error) => {
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				success(JSON.parse(xhr.responseText));
			} else {
				error(xhr.responseText);
			}
		}
	};
	xhr.open('GET', url);
	xhr.send();
};

export default class Home extends Component {

	componentWillMount(){

		const dataOnLoad = (d) => {
			console.log(d);
		};

		const dataOnError = (d) => {
			console.log(d);
		};

		getJSON('https://www.strava.com/api/v3/athlete/activities?access_token=d6e531678eda7526b64bd6c62626eb030da67039', dataOnLoad, dataOnError);
	}

	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>This is the Home component.</p>
			</div>
		);
	}
}
