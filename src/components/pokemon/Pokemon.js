import { useState } from "react";
import "./Pokemon.scss";
import PokemonListItem from "./PokemonListItem";

const Pokemon = () => {
  //  state variable that will be used to store the pokemon data once the request to the API is complete. Initialised with an empty array so that the map method further down doesn't crash becuase it can't find an array to map in the variable, see the note on line 25
  const [pokemonArray, setPokemonArray] = useState([]);

  // this function when called sends a request to the API and receives and processes the results into JS. It is asynchronous, hence the use of the async/await syntax
  const fetchPokemonList = async () => {
    // send request and await response
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    // begin decoding the download and await completion
    const data = await response.json();
    // once complete, store the results array in the state variable created above
    setPokemonArray(data.results);
  };

  //  this function is a click handler for the load pokemon button. It calls the fetchPokemonList function above
  const loadPokemonHandler = (event) => {
    fetchPokemonList();
  };

  // this bit of code is not a function, it executes every time the component is loaded/re-loaded. It scans the state variable and if there are any pokemon objects in the array it creates instances of the PokemonListItem component with the object data passed down as props
  // NOTE: If there isn't an array in the state variable this code breaks because you can't map 'undefined', this is why we initialise the state variable with an empty array
  const pokemonListItems = pokemonArray.map((item) => {
    return (
      <PokemonListItem
        // create key, and two props: name and url, load in the values of item.name and item.url as their values. These can then be accessed in the props object in the child component
        key={item.name}
        name={item.name}
        url={item.url}
      ></PokemonListItem>
    );
  });

  // this is the JSX markup that this component renders in the DOM
  return (
    <div>
      <h2>Pokemon</h2>
      <button onClick={loadPokemonHandler}>Load Pokemon</button>
      {/* The array of PokemonListItem components is injected here */}
      <ul>{pokemonListItems}</ul>
    </div>
  );
};
export default Pokemon;
