import { createAsyncThunk } from "@reduxjs/toolkit";
import { goItApi } from "../../config/goItApi";

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goItApi.post("users/signup", credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
