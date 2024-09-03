// Define action types
export const EDIT_ITEM = "EDIT_ITEM";
export const SAVE_ITEM = "SAVE_ITEM";
export const CANCEL_EDIT = "CANCEL_EDIT";
export const UPDATE_FORM_VALUE = "UPDATE_FORM_VALUE";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const searchProducts = (query) => ({
  type: SEARCH_PRODUCTS,
  payload: query,
});

// Action creators
export const editItem = (item) => ({
  type: EDIT_ITEM,
  payload: item,
});

export const saveItem = (item) => ({
  type: SAVE_ITEM,
  payload: item,
});

export const cancelEdit = () => ({
  type: CANCEL_EDIT,
});

export const updateFormValue = (formValues) => ({
  type: UPDATE_FORM_VALUE,
  payload: formValues,
});
