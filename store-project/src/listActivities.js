function capitalize(string) {
	console.log(string);
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function createHTML(activity) {
	const container = document.createElement('div');
	container.classList.add('activity');

	const title = document.createElement('h2');
	title.textContent = activity.activity;

	const type = document.createElement('p');
	type.textContent = `Type: ${activity.type}`;

	const price = document.createElement('p');
	price.textContent = `Price: ${activity.price * 10}/10`;

	const accessibility = document.createElement('p');
	accessibility.textContent = `Accessibility: ${
		10 - activity.accessibility * 10
	}/10`;

	const participants = document.createElement('p');
	participants.textContent = `Participants: ${activity.participants}`;

	container.append(title, type, price, accessibility, participants);

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
