const url = 'https://fakestoreapi.com/products';

async function getProducts() {
	const data = await fetch(url)
		.then((res) => res.json())
		.then((data) => {
			return data;
		});
	return data;
}

export default getProducts;
