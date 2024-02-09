import { FC } from "react";
import { useAppDispatch } from "../../../state/store";
import { incrementByAmount } from "../../../state/counter/counterSlice";

type Props = {
  incrementBy: number;
};
const Component: FC<Props> = ({incrementBy}) => {
    const dispatch = useAppDispatch();
  return <button onClick={() => dispatch(incrementByAmount(incrementBy))}>Increment by {incrementBy}</button>;
};

export default Component;
