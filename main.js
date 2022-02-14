let pokemonContainer = document.getElementById('pkmnContainer');

function fetchPkmn(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => console.log(data));
}

function fetchAllPkmns(number) {
    for (let  i = 1;  i <= number;  i++) {
    fetchPkmn(i);     
    }
}

fetchAllPkmns(2);