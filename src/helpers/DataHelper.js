export const findInLink = (link, request) => {
	if (request === '')
		return link.match(`([0-9]+)`)[1];
	else
		return link.match(`${request}=([a-z, A-Z, =, 0-9]+)`)[1];
};