import "./PokemonListItem.scss";

// the child component. A simple component that receives two props from the parent, 'name' and 'url'. When passed down to a child these props get combined into a single object as key/value pairs. We can access then through the parameter in the component function, usually called 'props' though you can name it whatever you like.
const PokemonListItem = (props) => {
  // click handler function. When this component is clicked on it triggers this function
  const clickHandler = (event) => {
    // when the click handler is called, it accesses the onClick prop passed down from the parent. This prop contains a reference to the function in the parent that can GET the details of a specific pokemon if supplied with a valid url. The PokemonListItem components, when clicked, activate this function and pass in their url as a parameter, resulting in the function running in the parent and loading up the details of a pokemon. This allows the parent to then forward the data to a PokemonDetails component
    props.onClick(props.url);
  };
  return (
    // click listener added to the list item. When clicked it calls the click handler function above
    <li onClick={clickHandler}>
      {/* access and render the values of the props like this */}
      <p>{props.name}</p>
      <p>{props.url}</p>
    </li>
  );
};

export default PokemonListItem;
