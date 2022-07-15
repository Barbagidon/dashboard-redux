import { ADD_FILTER, REMOVE_FILTERS, REMOVE_FILTER } from "./filter-action";

export const setFilter = (state = [], action) => {
  switch (action.type) {
    case ADD_FILTER: {
      if (!state.includes(action.filter)) return [...state, action.filter];

      return state;
    }

    case REMOVE_FILTERS: {
      return [];
    }

    case REMOVE_FILTER: {
      return state.filter((item) => item !== action.filter);
    }
    default: {
      return state;
    }
  }
};
