import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../Redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h3>Number of Icecreams: {props.noOfIcecreams}</h3>
      <button onClick= {props.buyIceCream}>Buy Icecream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfIcecreams: state.iceCream.numberOfIcecreams
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);