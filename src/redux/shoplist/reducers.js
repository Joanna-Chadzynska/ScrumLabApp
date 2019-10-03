import { ADD_TO_SHOPLIST, REMOVE_FROM_SHOPLIST } from "./actionTypes";

const initState = {
  shoplist: []
};

export const shoplist = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_SHOPLIST:
      return Object.assign({}, state, {
        shoplist: [
          ...state.shoplist.filter((item) => item.id !== action.payload.id),
          action.payload
        ]
      });

    case REMOVE_FROM_SHOPLIST:
      return Object.assign({}, state, {
        shoplist: [
          ...state.shoplist.filter((item) => item.id !== action.payload.id)
        ]
      });

    default:
      return state;
  }
};
