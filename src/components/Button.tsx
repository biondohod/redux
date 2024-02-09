import { increment } from "../state/counter/counterSlice";
import { useAppDispatch } from "../state/store";

const Button = () => {
    const dispatch = useAppDispatch();
    return (
        <div onClick={() => dispatch(increment())}>Button</div>
    )
}

export default Button