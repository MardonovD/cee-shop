import ActionType from "../contants/action-type";


export const setProducts = (products) => {
  return {
    type: ActionType.SET_PRODUCTS,
    payload: products,
  };
};
export const selectProduct = (product) => {
  return {
    type: ActionType.SELECTED_SET_PRODUCT,
    payload: product,
  };
};
