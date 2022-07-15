export const visiblePosition = (state, filters = []) => {
  if (filters.length < 1) {
    return state.position;
  }

  return state.position.filter((item) => {
    const checkArr = [].concat(
      item.role,
      item.level,
      ...item.languages,
      ...item.tools
    );

    return filters.every((filter) => {
      return checkArr.includes(filter);
    });
  });
};
