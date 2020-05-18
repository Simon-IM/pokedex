import React from 'react';

const Searchbar = (props) => {
  return (
    <div className="Searchbar" >
      <input type="text" placeholder="Enter Pokemon Here" onChange={props.handleChange}/>
      <button onClick={props.handleClick}>Search</button>
    </div>
  );
}

export default Searchbar;