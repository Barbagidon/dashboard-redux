export const ADD_FILTER = "ADD_FILTER";
export const REMOVE_FILTERS = "REMOVE_FILTERS";
export const REMOVE_FILTER = "REMOVE_FILTER";

export const addFilter = (filter) => ({
  type: ADD_FILTER,
  filter,
});

export const removeFilters = () => ({
  type: REMOVE_FILTERS,
});

export const removeFilter = (filter) => ({
  type: REMOVE_FILTER,
  filter,
});
