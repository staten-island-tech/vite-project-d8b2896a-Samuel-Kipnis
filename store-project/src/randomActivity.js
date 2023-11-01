const url = 'http://www.boredapi.com/api/activity';
const activityTypes = [
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

function randomType() {
	return activityTypes[Math.floor(Math.random() * activityTypes.length)];
}

async function getActivity(type = randomType()) {
	const data = await fetch(url, {
		type: type,
	})
		.then((res) => res.json())
		.then((data) => {
			return data;
		});
	return data;
}

async function getActivities(num) {
	const activities = [];
	for (let i = 0; i < num; i++) {
		const activity = await getActivity();
		activities.push(activity);
	}
	return activities;
}

export default getActivities;
