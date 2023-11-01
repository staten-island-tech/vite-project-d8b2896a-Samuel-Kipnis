import './styles/style.css';
import listActivityDisplays from './src/listActivities';
import getActivities from './src/randomActivity';
import renderSelectors from './src/renderSelectors';

async function main() {
	const activities = await getActivities(12);

	document.querySelector('#app').append(renderSelectors());
	document.querySelector('#app').append(listActivityDisplays(activities));
}

main();
