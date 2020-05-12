import React from 'react';

function Searchbar(props) {
  return (
    <div>
      <input type="text" onChange={props.handleChange}/>
      <button onClick={props.handleClick}>Search</button>
    </div>
  );
}

export default Searchbar;