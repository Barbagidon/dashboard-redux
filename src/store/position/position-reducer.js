import { GET_POSITION } from "./position-actions";

export const positionReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POSITION: {
      return action.position;
    }
    default: {
      return state;
    }
  }
};
