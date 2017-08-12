module.exports = {
	sum(operator1, operator2) {
		return operator1 + operator2;
	},
	sub(operator1, operator2) {
		return operator1 - operator2;
	},
	mult(operator1, operator2) {
		return operator1 * operator2;
	},
	div(operator1, operator2) {
		return operator2 === 0 ? 'undefined' : operator1 / operator2;
	},
};
