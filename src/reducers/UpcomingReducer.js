// src/reducers/UpcomingReducer.js
export const UpcomingReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_UPCOMING":
      return action.payload;
    default:
      return state;
  }
};
