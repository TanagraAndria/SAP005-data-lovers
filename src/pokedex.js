import data from './data/pokemon/pokemon.js';
import {getPokemonIndexFromUrl} from './data.js';
getPokemonIndexFromUrl();

//console.log(document.getElementsByClassName('name-pokemon')[0]);

const pokemon = data.pokemon[getPokemonIndexFromUrl()];

document.getElementsByClassName('name-pokemon')[0].innerHTML = pokemon.name;
document.getElementsByClassName('pokedex-pokemon-img')[0].src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+ pokemon.num + '.png';
document.getElementsByClassName('pokedex-list-about')[0].innerHTML = 'About:' + pokemon.about;
document.getElementsByClassName('pokedex-list-type')[0].innerHTML = 'Type:' + pokemon.type;
document.getElementsByClassName('pokedex-list-weaknesses')[0].innerHTML = 'Weaknesses:' + pokemon.weaknesses;
document.getElementsByClassName('pokedex-list-resistant')[0].innerHTML ='Resistant:' + pokemon.resistant;
document.getElementsByClassName('pokedex-list-km')[0].innerHTML ='Km Egg:' + pokemon.egg;

