import {getPokemonNumFromUrl, getPokemonByNum, filterData, orderData, computeStats } from '../src/data.js';


describe('verificar se é uma função', () => {
  it('é uma função', () => {
    expect(typeof getPokemonNumFromUrl).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
