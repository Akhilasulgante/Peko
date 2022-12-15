//Akhila
//Demonstarting proptypes
// I like how you organized the js file and its corresponding css file in the same folder
// instead of having all the css files in a single styles folder.  
import React from "react";
import PropTypes from "prop-types";
import "./Currentuser.css";

export default function Currentuser({ user }) {
  return <p className="userbutton">{user}</p>;
}

Currentuser.propTypes = {
  user: PropTypes.string,
};
