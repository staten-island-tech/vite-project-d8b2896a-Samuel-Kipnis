import products from './productInfo';

function createHTML(product) {
	const container = document.createElement('div');
	container.classList.add('product');

	const title = document.createElement('h3');
	title.textContent = product.title;

	const img = document.createElement('img');
	img.src = product.img;
	img.alt = product.title;
	img.style.height = '200px';
	const price = document.createElement('p');
	price.textContent = product.price;

	container.append(title, img, price);

	return container;
}

function listProductDisplays() {
	const display = document.createElement('div');
	display.classList.add('container');

	products.forEach((product) => {
		const productDisplay = createHTML(product);
		display.append(productDisplay);
	});

	return display;
}

export default listProductDisplays;
