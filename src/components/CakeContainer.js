import React from "react";
import { buyCake } from "../Redux";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div>
      <h3>Number of Cakes : {props.noOfCakes}</h3>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfCakes: state.cake.numberOfCakes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
