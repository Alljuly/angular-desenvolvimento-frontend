const pokemonOl = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");

const limit = 10;
let offset = 0;

function pokemonToHTML(pokemon) {
	return `
    <li class="pokemon ${pokemon.type}" >
		<span class="number">#${pokemon.order}</span>
		<span class="name">${pokemon.name}</span>
		    <div class="detail">
                <ol class="types">
                    ${pokemon.types
											.map((type) => `<li class="type ${type}">${type}</li>`)
											.join("")}
                </ol>

                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
        `;
}

function loadItems(offset, limit) {
	pokeAPI.getPokemons(offset, limit).then((pokemons = []) => {
		const newHtml = pokemons.map(pokemonToHTML).join("");
		pokemonOl.innerHTML += newHtml;
	});
}

loadItems(offset, limit);

loadMoreButton.addEventListener("click", () => {
	offset += limit;
	loadItems(offset, limit);
});
