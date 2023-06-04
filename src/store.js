import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./reduxToolkit";

export default configureStore({
  reducer: {
    game: gameReducer,
  },
});