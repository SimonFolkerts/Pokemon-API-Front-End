import "./PokemonListItem.scss";

// the child component. A simple component that receives two props from the parent, 'name' and 'url'. When passed down to a child these props get combined into a single object as key/value pairs. We can access then through the parameter in the component function, usually called 'props' though you can name it whatever you like.
const PokemonListItem = (props) => {
  const clickHandler = (event) => {
    props.onClick(props.url);
  };
  return (
    <li onClick={clickHandler}>
      {/* access and render the values of the props like this */}
      <p>{props.name}</p>
      <p>{props.url}</p>
    </li>
  );
};

export default PokemonListItem;
