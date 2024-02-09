import { decrement, increment, incrementAsync } from "../state/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../state/store";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(incrementAsync(1))}>increment async</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementAsync(-1))}>decrement async</button>
      </div>
    </div>
  );
};

export default Counter;
