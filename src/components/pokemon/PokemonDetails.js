import "./PokemonDetails.scss";

// this component receives the pokemonData object as a prop, as well as a function that clears the data in the parent so that it switches back to the list view
const PokemonDetails = (props) => {
  // this is the handler for the back button. When clicked it accesses a function in the props that clears the data from the state variable in the parent, which causes it to switch back to the list view due to the ternary operator in the JSX
  const backHandler = () => {
    props.onClearPokemonDetails();
  };

  return (
    <div>
      {/* render the pokemon name using the name data in the pokemonDetails prop */}
      <h2>{props.pokemonDetails.name}</h2>
      {/* render the official artwork of the pokemon by digging into the sprites data and finding it. This is a large object and the official artwork is nested quite deep, so there are a lot of steps to navigate to it */}
      <img
        src={
          props.pokemonDetails.sprites.other["official-artwork"].front_default
        }
        alt="sprite"
      />
      {/* back button that clears the data in the parent, causing its ternary operator to conditionally render the list instead of this component */}
      <button onClick={backHandler}>Back</button>
    </div>
  );
};

export default PokemonDetails;
