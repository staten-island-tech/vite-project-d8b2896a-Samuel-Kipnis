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
	const res = await fetch(url, {
		type: type,
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			return data;
		});
}

async function getActivities() {
	const activities = [];
	for (let i = 0; i < 10; i++) {
		const activity = await getActivity();
		activities.push(activity);
	}
	return activities;
}

export default getActivities;
