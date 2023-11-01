function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function renderSelectors() {
	const container = document.createElement('div');

	const types = [
		'education',
		'recreational',
		'social',
		'diy',
		'charity',
		'cooking',
		'relaxation',
		'music',
		'busywork',
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
	typeSelector.addEventListener('change', (e) => {
		console.log(typeSelector.options[typeSelector.selectedIndex].value);
	});

	container.append(selectorLabel, typeSelector);

	return container;
}

export default renderSelectors;
