import "./PokemonDetails.scss";

const PokemonDetails = (props) => {
  console.log(props);
  const backHandler = () => {
    props.onClearPokemonDetails();
  };
  return (
    <div>
      <h2>{props.pokemonDetails.name}</h2>
      <img
        src={
          props.pokemonDetails.sprites.other["official-artwork"].front_default
        }
        alt="sprite"
      />
      <button onClick={backHandler}>Back</button>
    </div>
  );
};

export default PokemonDetails;
