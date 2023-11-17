import { capitalize } from './utils';

const typeSelector = document.createElement('select');
typeSelector.id = 'typeSelector';

const selectorLabel = document.createElement('label');
selectorLabel.id = 'selectorLabel';
selectorLabel.for = 'typeSelector';
selectorLabel.textContent = 'Selection';

const types = [
	'all',
	'electronics',
	'jewelery',
	"men's clothing",
	"women's clothing",
];

types.forEach((type) => {
	const typeSelection = document.createElement('option');
	typeSelection.value = type;
	typeSelection.textContent = capitalize(type);

	typeSelector.append(typeSelection);
});
typeSelector.selectedIndex = -1;

export { typeSelector, selectorLabel };
