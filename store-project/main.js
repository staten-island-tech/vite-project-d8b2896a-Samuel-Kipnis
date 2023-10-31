import './styles/style.css';
import listActivityDisplays from './src/listActivities';
import getActivities from './src/randomActivity';

async function main() {
	const activities = await getActivities();
	console.log(activities);
	document.querySelector('#app').append(listActivityDisplays(activities));
}

main();
