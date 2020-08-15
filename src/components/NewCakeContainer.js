import React, { useState } from "react";
import { buyCake } from "../Redux";
import { connect } from "react-redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1)
  return (
    <div>
      <h3>Number of Cakes : {props.numberOfCakes}</h3>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
}; 

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: number => dispatch(buyCake(number))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
