import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonStyled } from "./style";

const Button = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state);

  const handleIncrement = useCallback(() => {
    dispatch({ type: "INCREMENT" });
  }, [dispatch]);

  const handleDecrement = useCallback(() => {
    dispatch({ type: "DECREMENT" });
  }, [dispatch]);

  return (
    <>
      <ButtonStyled onClick={handleIncrement}>+</ButtonStyled>
      <p>{selector}</p>
      <ButtonStyled onClick={handleDecrement}>-</ButtonStyled>
    </>
  );
};

export default Button;
