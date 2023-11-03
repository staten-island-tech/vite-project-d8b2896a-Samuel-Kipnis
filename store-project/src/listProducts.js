function capitalize(string) {
	console.log(string);
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function createHTML(product) {
	const container = document.createElement('div');
	container.classList.add('product');

	const title = document.createElement('h2');
	title.textContent = product.title;

	const category = document.createElement('p');
	category.textContent = `Category: ${product.category}`;
	
	const category = document.createElement('p');
	category.textContent = `Category: ${product.category}`;

	const price = document.createElement('p');
	price.textContent = `Price: $${product.price}`;

	const rating = document.createElement('p');
	rating.textContent = `Rating: ${product.rating.rate}/5, ${product.rating.count} reviews.`;

	container.append(title, category, price, rating);

	return container;
}

function listProductDisplays(products) {
	const display = document.createElement('div');
	display.classList.add('container');

	products.forEach((product) => {
		const productDisplay = createHTML(product);
		display.append(productDisplay);
	});

	return display;
}

export default listProductDisplays;
