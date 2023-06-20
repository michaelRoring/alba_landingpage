const initialState = {
  profile: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchEvaSuccess":
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
