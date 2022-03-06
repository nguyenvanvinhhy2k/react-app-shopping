import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increase, decrease } from "./counterSlice";

function CouterFeature(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const handleIncraeseClick = () => {
    dispatch(increase());
  };
  const handleDecreaseClick = () => {
    dispatch(decrease());
  };
  return (
    <div>
      Couter: {count}
      <br />
      <button onClick={handleIncraeseClick}> Increase </button>
      <button onClick={handleDecreaseClick}> Decrease </button>
    </div>
  );
}

CouterFeature.propTypes = {};

export default CouterFeature;
