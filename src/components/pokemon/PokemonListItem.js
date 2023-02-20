import "./PokemonListItem.scss";

const PokemonListItem = (props) => {
  return (
    <li>
      <p>{props.name}</p>
      <p>{props.url}</p>
    </li>
  );
};

export default PokemonListItem;
