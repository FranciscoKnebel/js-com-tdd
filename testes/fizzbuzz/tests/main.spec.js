/*
	Fizzbuzz

	Se multiplo de 3, escreva 'Fizz'.
	Se multiplo de 5, escreva 'Buzz'.
	Se multiplo de 3 e 5, escreva 'FizzBuzz'.
	Se múltiplo de nada, retorna o número.
*/

import { expect } from 'chai';
import fizzBuzz from '../src/main';

describe('Main', () => {
	it('should return `Fizz` when multiple of 3 and not multiple of 5', () => {
		expect(fizzBuzz(3)).to.equal('Fizz');
		expect(fizzBuzz(6)).to.equal('Fizz');
		expect(fizzBuzz(12)).to.equal('Fizz');
		expect(fizzBuzz(15)).to.not.equal('Fizz');
		expect(fizzBuzz(30)).to.not.equal('Fizz');
	});

	it('should return `Buzz` when multiple of 5 and not multiple of 3', () => {
		expect(fizzBuzz(5)).to.equal('Buzz');
		expect(fizzBuzz(10)).to.equal('Buzz');
		expect(fizzBuzz(20)).to.equal('Buzz');
		expect(fizzBuzz(15)).to.not.equal('Buzz');
		expect(fizzBuzz(30)).to.not.equal('Buzz');
	});

	it('should return `FizzBuzz` when multiple of 3 and 5', () => {
		expect(fizzBuzz(15)).to.equal('FizzBuzz');
		expect(fizzBuzz(30)).to.equal('FizzBuzz');
	});

	it('should return the number when not multiple of 3 and 5', () => {
		expect(fizzBuzz(7)).to.equal(7);
		expect(fizzBuzz(14)).to.equal(14);
		expect(fizzBuzz(2)).to.equal(2);
		expect(fizzBuzz(11)).to.equal(11);
	});
});
