import {getPokemonNumFromUrl, getPokemonByNum, filterData, orderData, computeStats} from '../src/data.js';

describe('Verificar se getPokemonNumFromUrl é uma função', () => {
  it('getPokemonNumFromUrl é uma função', () => {
    expect(typeof getPokemonNumFromUrl).toBe('function');
  });
});

describe('getPokemonByNum', () => {
  it('getPokemonByNum é uma função', () => {
    expect(typeof getPokemonByNum).toBe('function');
  });

  it('Pode retornar um throw TypeError quando invocado com argumentos do tipo errado', () => {
    expect(() => getPokemonByNum()).toThrow(TypeError);
    expect(() => getPokemonByNum(null, [])).toThrow(TypeError);
    expect(() => getPokemonByNum(0, 0)).toThrow(TypeError);
  });

  it('Retorna false quando não recebe os parâmetros corretos', () => {
    const resultado = getPokemonByNum([],2)
    expect(resultado).toBe(false)
  });

  it('Retorna o objeto quando recebe os parâmetros corretos', () => {
    const data = [{num: "001"}, {num: "015"}];
    const resultado = getPokemonByNum(data, "015");
    expect(resultado).toMatchObject({num: "015"})
  });
});

describe('filterData', () => {
  it('filterData é uma função', () => {
    expect(typeof filterData).toBe('function');
  });

  it('Pode retornar um throw TypeError quando invocado com argumentos do tipo errado', () => {
    expect(() => filterData()).toThrow(TypeError);
    expect(() => filterData(null, [])).toThrow(TypeError);
    expect(() => filterData(0, 0)).toThrow(TypeError);
  });

  it('Segundo parâmetro deve ser um objeto ao passar uma string retorna array vazio' , ( )  =>  {
    const data = [{name: "bulbasaur"}, {name: "pikachu"}];
    const resultado = filterData(data, "bul")
    expect(resultado).toEqual([]);
  });

  it('Deve retorna um array de objetos que contenha o "bul" incluido no seu name' , ( )  =>  {
    const data = [{name: "bulbasaur"}, {name: "pikachu"}];
    const resultado = filterData(data, {name: "bul"})
    expect(resultado).toEqual([{name: "bulbasaur"}]);
  });

  it('deve procurar o tipo do pokemon' , ( )  =>  {
    const data = [{type: "water"}, {type: "fire"}];
    const resultado = filterData(data, {type: "fire"})
    expect(resultado).toEqual([{type: "fire"}]);
  });

  it('deve retornar um array vazio quando um parâmetro não for verdadeiro' , ( )  =>  {
    const data =[{name: "bulbasaur"}, {name: "pikachu"}];
    const resultado = filterData(data, {name: "001"})
    expect(resultado).toEqual([]);
  });

  it('deve retornar um array vazio quando um parâmetro não for verdadeiro' , ( )  =>  {
    const data =[{name: "bulbasaur"}, {name: "pikachu"}];
    const resultado = filterData(data, {name: "water"})
    expect(resultado).toEqual([]);
  });
});

describe('orderData', () => {
  it('orderData é uma função', () => {
    expect(typeof orderData).toBe('function');
  });

  it('Pode retornar um throw TypeError quando invocado com argumentos do tipo errado', () => {
    expect(() => orderData()).toThrow(TypeError);
    expect(() => orderData(null, [])).toThrow(TypeError);
    expect(() => orderData(0, 0)).toThrow(TypeError);
  });

  it('orderData ordenando de forma crescente, com primeiro indice menor', () => {
    const data = [{"name": "bulbasaur"}, {"name": "pikachu"}];
    const resultado = orderData(data, "name", "asc")
    expect(resultado).toEqual(undefined);
  });

  it('orderData ordenando de forma crescente, com indices iguais', () => {
    const data = [{"name": "bulbasaur"}, {"name": "bulbasaur"}];
    const resultado = orderData(data, "name", "asc")
    expect(resultado).toEqual(undefined);
  });

  it('orderData ordenando de forma crescente, com primeiro indice maior', () => {
    const data = [{"name": "pikachu"}, {"name": "bulbasaur"}];
    const resultado = orderData(data, "name", "asc")
    expect(resultado).toEqual(undefined);
  });

  it('orderData ordenando de forma decrescente, com primeiro indice menor', () => {
    const data = [{"name": "bulbasaur"}, {"name": "pikachu"}];
    const resultado = orderData(data, "name", "desc")
    expect(resultado).toEqual(undefined);
  });

  it('orderData ordenando de forma decrescente, com indices iguais', () => {
    const data = [{"name": "bulbasaur"}, {"name": "bulbasaur"}];
    const resultado = orderData(data, "name", "desc")
    expect(resultado).toEqual(undefined);
  });

  it('orderData ordenando de forma decrescente, com primeiro indice maior', () => {
    const data = [{"name": "pikachu"}, {"name": "bulbasaur"}];
    const resultado = orderData(data, "name", "desc")
    expect(resultado).toEqual(undefined);
  });
});

describe('Verificar se computeStats é uma função', () => {
  it('computeStats é uma função', () => {
    expect(typeof computeStats).toBe('function');
  });
  it('Pode retornar um throw TypeError quando invocado com argumentos do tipo errado', () => {
    expect(() => computeStats()).toThrow(TypeError);
    expect(() => computeStats(null, [])).toThrow(TypeError);
    expect(() => computeStats(0, 0)).toThrow(TypeError);
  });
  it('computeStats retorna o maior dano causado', () => {
    const data = [{'base-damage': 90}, {'base-damage': 50}];
    const resultado = computeStats(data, true)
    expect(resultado).toEqual({'base-damage': 90});
  });
  it('computeStats retorna o menor dano causado', () => {
    const data = [{'base-damage': 90}, {'base-damage': 50}];
    const resultado = computeStats(data, false)
    expect(resultado).toEqual({'base-damage': 50});
  });
});