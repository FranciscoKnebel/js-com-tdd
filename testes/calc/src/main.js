const sum = (operator1, operator2) => operator1 + operator2;
const sub = (operator1, operator2) => operator1 - operator2;
const mult = (operator1, operator2) => operator1 * operator2;
const div = (operator1, operator2) => ((operator2 === 0) ? 'undefined' : operator1 / operator2);

export {
	sum, sub, mult, div,
};
