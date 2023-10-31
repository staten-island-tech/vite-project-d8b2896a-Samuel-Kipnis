function capitalize(string) {
	console.log(string);
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function createHTML(activity) {
	const container = document.createElement('div');
	container.classList.add('activity');

	const title = document.createElement('h3');
	title.textContent = activity.activity;

	const type = document.createElement('h4');
	type.textContent = activity.type;

	const price = document.createElement('h4');
	price.textContent = activity.price;

	const participants = document.createElement('h4');
	participants.textContent = activity.participants;

	container.append(title, type, price, participants);

	return container;
}

function listActivityDisplays(activities) {
	const display = document.createElement('div');
	display.classList.add('container');

	activities.forEach((activity) => {
		const activityDisplay = createHTML(activity);
		display.append(activityDisplay);
	});

	return display;
}

export default listActivityDisplays;
