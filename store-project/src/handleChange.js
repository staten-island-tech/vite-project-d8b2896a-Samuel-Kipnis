import listProductDisplays from './listProducts';
import products from './data';
import { condense } from './utils';

export default async function (typeSelector, outputDiv) {
	outputDiv.innerHTML = '';
	outputDiv.className = condense(
		typeSelector.options[typeSelector.selectedIndex].value
	);

	outputDiv.append(
		listProductDisplays(
			products.filter((product) => {
				if (
					typeSelector.options[typeSelector.selectedIndex].value !==
					'all'
				) {
					return (
						product.category ===
						typeSelector.options[typeSelector.selectedIndex].value
					);
				} else {
					return true;
				}
			})
		)
	);
}
