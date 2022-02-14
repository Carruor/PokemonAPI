let pokemonContainer = document.getElementById('pkmnContainer');

function fetchPkmn(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
        createPkmnCard(data);
    });
}

function fetchAllPkmns(number) {
    for (let  i = 1;  i <= number;  i++) {
    fetchPkmn(i);     
    }
}

fetchAllPkmns(5);

function createPkmnCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemonCard');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('imgContainer');

    const img = document.createElement('img');
    img.src =pokemon.sprites.front_default;

    imgContainer.appendChild(img);

    const number = document.createElement('p');
    number.textContent = `${pokemon.id}`;

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name;

    card.appendChild(imgContainer);
    card.appendChild(number);
    card.appendChild(name); 

    pokemonContainer.appendChild(card);
}

