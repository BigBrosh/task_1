export const findInLink = (link, request) => link.match(`${request}=([a-z, A-Z, =, 0-9]+)`)[1];