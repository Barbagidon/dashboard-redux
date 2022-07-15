import { combineReducers } from "redux";
import { positionReducer } from "./position/position-reducer";
import { setFilter } from "./filter/filter-reducer";

export const rootReducer = combineReducers({
  position: positionReducer,
  filter: setFilter,
});
