import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calc', () => {
	// smoke tests
	describe('Smoke tests', () => {
		it('should exist the method sum', () => {
			expect(sum).to.exist;
			expect(sum).to.be.a('function');
		});

		it('should exist the method sub', () => {
			expect(sub).to.exist;
			expect(sub).to.be.a('function');
		});

		it('should exist the method mult', () => {
			expect(mult).to.exist;
			expect(mult).to.be.a('function');
		});

		it('should exist the method div', () => {
			expect(div).to.exist;
			expect(div).to.be.a('function');
		});
	});

	describe('Sum', () => {
		it('should return 4 when sum(2,2)', () => {
			expect(sum(2, 2)).to.be.equal(4);
		});
	});

	describe('Sub', () => {
		it('should return 2 when sub(6,4)', () => {
			expect(sub(6, 4)).to.be.equal(2);
		});

		it('should return -2 when sub(4,6)', () => {
			expect(sub(4, 6)).to.be.equal(-2);
		});
	});

	describe('Mult', () => {
		it('should return 6 when mult(3,2)', () => {
			expect(mult(3, 2)).to.be.equal(6);
		});
	});

	describe('Div', () => {
		it('should return 3 when div(6,2)', () => {
			expect(div(6, 2)).to.be.equal(3);
		});

		it('should return the string `undefined` when divide by zero', () => {
			expect(div(6, 0)).to.be.equal('undefined');
		});
	});
});
