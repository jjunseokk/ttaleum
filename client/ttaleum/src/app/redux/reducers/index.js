import { combineReducers } from "@reduxjs/toolkit";
import reducer from "./reducer";

export default combineReducers({
    // (원하는 작명) : reducer.js
    test : reducer,
})