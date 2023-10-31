function capitalize(string) {
	console.log(string);
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function createHTML(product) {
	const container = document.createElement('div');
	container.classList.add('product');

	const title = document.createElement('h3');
	title.textContent = product.name;

	const nutrition = document.createElement('ul');
	Object.keys(product.nutritions).forEach((key) => {
		const nutrient = document.createElement('li');
		nutrient.textContent = `${capitalize(key)}: ${product.nutritions[key]}${
			key != 'calories' ? 'g' : ''
		}`;
		nutrition.append(nutrient);
	});

	container.append(title, nutrition);

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
