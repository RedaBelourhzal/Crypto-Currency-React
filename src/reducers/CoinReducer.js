const initialState = {
  coins: [],
};

const CoinReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COINS":
      return { ...state, coins: action.payload };
    default:
      return state;
  }
};

export default CoinReducer;
