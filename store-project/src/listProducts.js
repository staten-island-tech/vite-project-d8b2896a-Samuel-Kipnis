import { capitalize } from './utils';

function createHTML(product, type) {
	const container = document.createElement('div');
	container.classList.add('product');

	const title = document.createElement('h2');
	title.textContent = product.title;

	const category = document.createElement('p');
	category.textContent = `Category: ${capitalize(product.category)}`;

	const description = document.createElement('p');
	description.textContent = product.description;

	const price = document.createElement('p');
	price.textContent = `Price: $${product.price}`;

	const rating = document.createElement('p');
	rating.textContent = `Rating: ${product.rating.rate}/5, ${product.rating.count} reviews.`;

	container.append(title, category, description, price, rating);

	return container;
}

function listProductDisplays(products) {
	const display = document.createElement('div');
	display.classList.add('womensClothing');
	display.classList.add('container');

	products.forEach((product) => {
		const productDisplay = createHTML(product);
		display.append(productDisplay);
	});

	return display;
}

export default listProductDisplays;
