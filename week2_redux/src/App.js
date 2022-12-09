import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNumber, MinusNumber } from './redux/modules/counter';

const App = () => {
  const globalNumber = useSelector((state) => state.counter.number);
  console.log(globalNumber);
  const dispatch = useDispatch();

  const [number, setNumber] = useState(0);
  const onChangeHandler = (event) => {
    //console.log(event.target);
    const { value } = event.target;
    setNumber(+value);
  };

  const onClickAddNumberHandler = () => {
    dispatch(addNumber(number));
  };
  const onClickMinusNumberHandler = () => {
    dispatch(MinusNumber(number));
  };
  console.log(number);

  return (
    <div>
      {globalNumber}
      <input type='number' onChange={onChangeHandler} value={number} />
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinusNumberHandler}>빼기</button>
    </div>
  );
};

export default App;
