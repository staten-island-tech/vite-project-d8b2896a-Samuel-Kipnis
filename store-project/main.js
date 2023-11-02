import './styles/style.css';
import getProducts from './src/getProducts';
import listProductDisplays from './src/listProducts';
import renderSelectors from './src/renderSelectors';

async function main() {
	const products = await getProducts();
	document.querySelector('#app').append(listProductDisplays(products));
}

main();
