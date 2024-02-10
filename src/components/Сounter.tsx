import { useEffect } from "react";
import {
  decrement,
  increment,
  incrementAsync,
} from "../state/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../state/store";
import { toast } from "react-toastify";

type error = {
  data: {
    message: string;
  };
};

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  useEffect(() => {
    toast.info("Hello! Test DRAGGABLE INFO", {
      position: "top-right",
      draggable: true,
      autoClose: 10000,
    });
    toast.error("Hello! Test ERROR", {
      position: "top-right",
    });
    toast.warn("Hello! Test WARN", {
      position: "top-right",
    });
    toast.success("Hello! Test SUCCESS", {
      position: "top-right",
    });
    toast.info("Hello! Test stylized INFO", {
      position: "top-left",
      style: {
        backgroundColor: "red",
        color: "white",
      },
    });
    toast.error("Hello! Test dark ERROR", {
      position: "top-left",
      theme: "dark",
    });
    toast.info("Hello! Test INFO with a lot of text like it's a kinda big error an you're trynna show it all so everybody could understand what's going on idk what else can i type here", {
      position: "top-right",
      draggable: true,
      autoClose: 10000,
      theme: "colored"
    });
  }, []);

  const onClickHandler = (value: number) => {
    const promise = dispatch(incrementAsync(value)).unwrap().then(String);
    toast.promise(
      promise,
      {
        pending: "Loading...",
        success: {
          render: ({ data }: { data: string }) => {
            return `Incremented by ${data} 👌`;
          },
        },
        error: {
          render: (data: error) => {
            return `${data.data.message} 🤯`;
          },
        },
      },
      {
        position: "bottom-left",
      }
    );
  };
  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => onClickHandler(5)}>
          increment async
        </button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => onClickHandler(-5)}>
          decrement async
        </button>
      </div>
    </div>
  );
};

export default Counter;
