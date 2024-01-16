const pokeAPI = {};

function pokeApiDetailsToPokemon(details) {
	const pokemon = new Pokemon();

	pokemon.name = details.name;
	pokemon.order = details.id;

	const types = details.types.map((slot) => slot.type.name);
	const [type] = types;

	pokemon.types = types;
	pokemon.type = type;
	pokemon.photo = details.sprites.other.dream_world.front_default;

	return pokemon;
}

pokeAPI.getPokemons = (offset, limit) => {
	const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
	return fetch(url)
		.then((res) => res.json())
		.then((jsonBody) => jsonBody.results)
		.then((pokemons) => pokemons.map(pokeAPI.getDetails))
		.then((detailsResquest) => Promise.all(detailsResquest))
		.then((pokemonDetails) => pokemonDetails);
};

pokeAPI.getDetails = (pokemon) => {
	return fetch(pokemon.url).then((res) =>
		res.json().then((pokemon) => pokeApiDetailsToPokemon(pokemon))
	);
};
