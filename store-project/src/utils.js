export function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function condense(str) {
	const str1 = str.replace(' ', '');
	const str2 = str1.replace("'", '');
	return str2;
}
