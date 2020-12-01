function getPokemonNumFromUrl() {
  const queryString = window.location.search;

  const urlParameters = new URLSearchParams(queryString);

  return urlParameters.get('pokeNum');
};

function getPokemonByNum(data,num) {
  let filtered = data.filter(pokemon => pokemon.num == num);
  if(filtered[0]) {
    return filtered[0];
  }
  return false;
};

function filterData(data,condition) {
  return data.filter(pokemon => { 
    if(condition.name != 'undefined' && pokemon.name.includes(condition.name)) {
      return true;
    }
    if(condition.type &&  pokemon.type.indexOf(condition.type) != -1 || condition.type == "") {
      return true;
    }
    return false;
  });
};

function orderData(data) {
  data.sort();
};

function computeStats(data, isMax) {
  let attack;
  if(!isMax) {
    attack = data.reduce(function(prev, current) {
      return (prev['base-damage'] < current['base-damage']) ? prev : current
    });
  }else {
    attack = data.reduce(function(prev, current) {
      return (prev['base-damage'] > current['base-damage']) ? prev : current
    });
  }
  return attack;
}

export {getPokemonNumFromUrl, getPokemonByNum, filterData, orderData, computeStats};