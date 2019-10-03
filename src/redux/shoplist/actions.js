import { ADD_TO_SHOPLIST, REMOVE_FROM_SHOPLIST } from "./actionTypes";

export const addToShoplist = (payload) => ({ type: ADD_TO_SHOPLIST, payload });

export const removeFromShoplist = (payload) => ({
  type: REMOVE_FROM_SHOPLIST,
  payload
});
