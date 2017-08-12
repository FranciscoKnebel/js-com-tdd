const FizzBuzz = (num) => {
	let value = num;

	const divisibleBy3 = num % 3 === 0;
	const divisibleBy5 = num % 5 === 0;

	if (divisibleBy3 && divisibleBy5) {
		value = 'FizzBuzz';
	} else {
		if (divisibleBy3) { value = 'Fizz'; }
		if (divisibleBy5) { value = 'Buzz'; }
	}

	return value;
};

export default FizzBuzz;
