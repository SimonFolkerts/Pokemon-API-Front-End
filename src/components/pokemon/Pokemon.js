import { useState } from "react";
import "./Pokemon.scss";
import PokemonListItem from "./PokemonListItem";

const Pokemon = () => {
  const [pokemonArray, setPokemonArray] = useState([]);

  const fetchPokemonList = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    setPokemonArray(data.results);
  };

  const loadPokemonHandler = (event) => {
    fetchPokemonList();
  };

  const pokemonListItems = pokemonArray.map((item) => {
    return (
      <PokemonListItem
        key={item.name}
        name={item.name}
        url={item.url}
      ></PokemonListItem>
    );
  });

  return (
    <div>
      <h2>Pokemon</h2>
      <button onClick={loadPokemonHandler}>Load Pokemon</button>
      <ul>{pokemonListItems}</ul>
    </div>
  );
};
export default Pokemon;
