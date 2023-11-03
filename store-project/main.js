import './styles/style.css';
import getProducts from './src/getProducts';
import listProductDisplays from './src/listProducts';
import render from './src/render';

async function main() {
	const app = document.querySelector('#app');
	app.append(render());
}

main();
