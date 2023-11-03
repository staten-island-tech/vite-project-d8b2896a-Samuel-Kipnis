import getProducts from './getProducts';
import listProductDisplays from './listProducts';

function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function render() {
	const container = document.createElement('div');

	const types = [
		'all',
		'electronics',
		'jewelery',
		"men's clothing",
		"women's clothing",
	];
	const typeSelector = document.createElement('select');
	typeSelector.id = 'typeSelector';

	const selectorLabel = document.createElement('label');
	selectorLabel.for = 'typeSelector';
	selectorLabel.textContent = 'Selection';

	types.forEach((type) => {
		const typeSelection = document.createElement('option');
		typeSelection.value = type;
		typeSelection.textContent = capitalize(type);

		typeSelector.append(typeSelection);
	});
	typeSelector.selectedIndex = -1;

	const outputDiv = document.createElement('div');
	typeSelector.addEventListener('change', async (e) => {
		outputDiv.innerHTML = '';
		outputDiv.append(
			listProductDisplays(
				await getProducts(
					typeSelector.options[typeSelector.selectedIndex].value
				)
			)
		);
	});

	container.append(selectorLabel, typeSelector, outputDiv);

	return container;
}

export default render;
