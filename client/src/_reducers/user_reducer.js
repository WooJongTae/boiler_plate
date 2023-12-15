import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../user_actions/user_actions";
import axios from "axios";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loginSuccess: "",
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    // loginUser: (state, action) => {
    //   const tokenData = axios.post("/api/users/login", action.payload);
    //   console.log(tokenData.data);
    //   state.value = tokenData;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loginSuccess = "";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log(action);
        state.loginSuccess = action.payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loginSuccess = "에러";
      });
  },
});

// 각 케이스 리듀서 함수에 대해 액션 생성자가 생성된다.
export const { incrementByAmount } = userSlice.actions;

export default userSlice.reducer;
