function sum(a, b) {
	return a + b;
}

export function sub(a, b) {
	return a - b;
}

function mul(a, b) {
	return a * b;
}

function div(a, b) {
	return a / b;
}

export { mul as mult, div };

export default sum;
