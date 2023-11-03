const url = 'https://fakestoreapi.com/products';

async function getProducts(category) {
	if (category != 'all') {
		const data = await fetch(url + `/category/${category}`)
			.then((res) => res.json())
			.then((data) => {
				return data;
			});
		return data;
	} else {
		const data = await fetch(url)
			.then((res) => res.json())
			.then((data) => {
				return data;
			});
		return data;
	}
}

export default getProducts;
