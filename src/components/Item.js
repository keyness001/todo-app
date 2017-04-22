import React from "react";

const Item = (props) => {
  const {name, handleRemove, id} = props;
  return(
    <li onClick={(e) => {handleRemove(id)}}>{name}<span className="close">×</span></li>
  );
}

export default Item;
