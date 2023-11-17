import getProducts from './data';
import { typeSelector, selectorLabel } from './createSelector';
import handleChange from './handleChange';

function render() {
	const container = document.createElement('div');

	const outputDiv = document.createElement('div');
	typeSelector.addEventListener('change', async (e) => {
		handleChange(typeSelector, outputDiv);
	});

	container.append(selectorLabel, typeSelector, outputDiv);

	return container;
}

export default render;
