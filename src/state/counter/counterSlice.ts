import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface counterState {
  value: number;
}

const initialState: counterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        toast.info("Pending incrementAsync", {
          position: "bottom-right",
          theme: "dark",
          autoClose: 1000,
        });
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, () => {
        toast.warn("Rejected incrementAsync", {
          position: "bottom-right",
          theme: "colored",
          autoClose: 1000,
        });
        throw new Error("OH NO SKIBIDI TOILET");
      });
  },
});

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number, { rejectWithValue }) => {
    try {
        const isSuccess = Math.random() < 0.5;
        const result = await new Promise<number>((resolve, reject) => {
            setTimeout(() => {
                if (isSuccess) {
                    resolve(amount);
                } else {
                    reject("Failed to increment");
                }
            }, 1000);
        });
        return result;
    } catch (err) {
        return rejectWithValue((err as Error).message);
    }
  }
);

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
