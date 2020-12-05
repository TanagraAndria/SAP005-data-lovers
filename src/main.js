import data from './data/pokemon/pokemon.js';
import {filterData, orderData} from './data.js';

const search = document.getElementById('filter-name');
search.addEventListener('keyup', function(){
  let pokemons= filterData(data.pokemon, {name: search.value.toLowerCase()} );
  document.getElementById('root').innerHTML = "";
  load(pokemons);
})

const order = document.getElementById('select-option');
order.addEventListener('change', function (){
  let pokemons= filterData(data.pokemon, {type: order.options[order.selectedIndex].value});
  document.getElementById('root').innerHTML = "";
  if(order.options[order.selectedIndex].value) {
    orderData(pokemons,"name", "asc");
  }else {
    orderData(pokemons,"num", "asc");
  }
  load(pokemons);
})

function load(data){
for (const pokemon of data) {
  const img = document.createElement('img');
  img.src = pokemon.img;
  img.classList.add('img-card');
  
  let cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  
  const card = document.createElement('div');
  card.classList.add('card');

  let orderedList = document.createElement('ol');
  orderedList.classList.add('list-body');
  
  let listInfo1 = document.createElement('li');
  listInfo1.classList.add('num');
  listInfo1.innerHTML = pokemon.num;

  let listInfo2 = document.createElement('li');
  listInfo2.classList.add('name');
  listInfo2.innerHTML = pokemon.name;

  let listInfo3 = document.createElement('li');
  listInfo3.classList.add('type');
  listInfo3.innerHTML = pokemon.type;


  const button = document.createElement('button');
  button.classList.add('poke-info');
  button.innerHTML = 'Poke Info';
  button.addEventListener('click', function (){
    goToPokedex(pokemon.num);
  })

  card.appendChild(img);
  card.appendChild(cardBody);
  cardBody.appendChild(orderedList);
  cardBody.appendChild(button);
  orderedList.appendChild(listInfo1);
  orderedList.appendChild(listInfo2);
  orderedList.appendChild(listInfo3);
  document.getElementById('root').appendChild(card);
  }
}

 load(data.pokemon);
function goToPokedex(num) {
  window.location.href = "/pokedex?pokeNum=" + num;
}