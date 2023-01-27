import type { NextPage } from 'next';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../redux/slices/counterSlice';
import type { RootState } from '../redux/store';

const Counter: NextPage = () => {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>Counter test with Redux</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </>
  );
};

export default Counter;
