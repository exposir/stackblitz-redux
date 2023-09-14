// Action Types
export const SET_USERNAME = 'SET_USERNAME';

// Action Creators
export const setUsername = (name) => {
  return {
    type: SET_USERNAME,
    payload: name,
  };
};
