import data from './data/pokemon/pokemon.js';
import {getPokemonNumFromUrl, getPokemonByNum, computeStats} from './data.js';

const pokemon = getPokemonByNum(data.pokemon, getPokemonNumFromUrl());
const bestAttack = computeStats(pokemon['special-attack'], true);
const worstAttack = computeStats(pokemon['special-attack'], false);

document.getElementById('name-pokemon').innerHTML = pokemon.name;
document.getElementById('pokedex-pokemon-img').src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+ pokemon.num + '.png';
document.getElementById('list-about').innerHTML = '<span class="info-title">About: </span><span class="info-value">' + pokemon.about  + '</span>';
document.getElementById('list-type').innerHTML = '<span class="info-title">Type: </span><span class="info-value">' + pokemon.type  + '</span>';
document.getElementById('list-weaknesses').innerHTML = '<span class="info-title">Weaknesses: </span><span class="info-value">' + pokemon.weaknesses  + '</span>';
document.getElementById('list-resistant').innerHTML ='<span class="info-title">Resistant: </span><span class="info-value">' + pokemon.resistant  + '</span>';
document.getElementById('list-km').innerHTML ='<span class="info-title">Km Egg: </span><span class="info-value">' + pokemon.egg  + '</span>';
document.getElementById('max-damage').innerHTML ='The greatest damage done is the ' + bestAttack.name + ' and its value is ' + bestAttack['base-damage'] + '.';
document.getElementById('min-damage').innerHTML ='The least damage done is the ' + worstAttack.name + ' and its value is ' + worstAttack['base-damage'] + '.';

function getCard(data) {
    let img = document.createElement('img');
    img.src = 'https://www.serebii.net/pokemongo/pokemon/' + data.num +'.png';

    let orderedList = document.createElement('ol');
    orderedList.classList.add('list-evolution');

    let listInfo1 = document.createElement('li');
    listInfo1.classList.add('img-evolution');
    listInfo1.appendChild(img);

    let listInfo2 = document.createElement('li');
    listInfo2.classList.add('num-evolution');
    listInfo2.innerHTML = data.num;

    let listInfo3 = document.createElement('li');
    listInfo3.classList.add('name-evolution');
    listInfo3.innerHTML = data.name;

    let card = document.createElement('div');
    card.classList.add('card-evolution');
    orderedList.appendChild(listInfo1);
    orderedList.appendChild(listInfo2);
    orderedList.appendChild(listInfo3);
    card.appendChild(orderedList);
    return card;
}

if(pokemon.evolution['prev-evolution']) {
    for(const prevEvolution of pokemon.evolution['prev-evolution']) {
        let card = getCard(prevEvolution);
        if(prevEvolution['prev-evolution']) {
            for(const prevEvolution2 of prevEvolution['prev-evolution']) {
                let card = getCard(prevEvolution2);
                document.getElementsByClassName('evolution')[0].appendChild(card);
            }
        }
        document.getElementsByClassName('evolution')[0].appendChild(card);
    }
}

let card = getCard(pokemon);
document.getElementsByClassName('evolution')[0].appendChild(card);

if(pokemon.evolution['next-evolution']) {
    for(const nextEvolution of pokemon.evolution['next-evolution']) {
        let card = getCard(nextEvolution);
        document.getElementsByClassName('evolution')[0].appendChild(card);

        if(nextEvolution['next-evolution']){
            for(const nextEvolution2 of nextEvolution['next-evolution']) {
                let card = getCard(nextEvolution2);
                document.getElementsByClassName('evolution')[0].appendChild(card);
            }
        }
    }
}