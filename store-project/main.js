import './styles/style.css';
import render from './src/render';

async function main() {
	const app = document.querySelector('#app');
	app.append(render());
}

main();
