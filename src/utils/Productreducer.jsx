import {
  EDIT_ITEM,
  SAVE_ITEM,
  CANCEL_EDIT,
  UPDATE_FORM_VALUE,
  ADD_PRODUCT,
  SEARCH_PRODUCTS,
} from "../utils/ProjectAction";
import tabledata from "../db/tabledata.json"; // Adjust path if necessary

const initialState = {
  products: tabledata.products,
  filteredProducts: tabledata.products,
  editId: null,
  formValues: {},
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_ITEM:
      return {
        ...state,
        editId: action.payload.id,
        formValues: {
          name: action.payload.name,
          material: action.payload.details.material,
          unitLength: action.payload.details.unitLength,
          shape: action.payload.details.shape,
          price: action.payload.price,
        },
      };
    case SAVE_ITEM:
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === state.editId
            ? {
                ...item,
                name: state.formValues.name,
                details: {
                  material: state.formValues.material,
                  unitLength: state.formValues.unitLength,
                  shape: state.formValues.shape,
                },
                price: state.formValues.price,
              }
            : item
        ),
        filteredProducts: state.filteredProducts.map((item) =>
          item.id === state.editId
            ? {
                ...item,
                name: state.formValues.name,
                details: {
                  material: state.formValues.material,
                  unitLength: state.formValues.unitLength,
                  shape: state.formValues.shape,
                },
                price: state.formValues.price,
              }
            : item
        ),
        editId: null,
        formValues: {},
      };
    case CANCEL_EDIT:
      return {
        ...state,
        editId: null,
        formValues: {},
      };
    case UPDATE_FORM_VALUE:
      return {
        ...state,
        formValues: {
          ...state.formValues,
          ...action.payload,
        },
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        filteredProducts: [...state.filteredProducts, action.payload],
      };
    case SEARCH_PRODUCTS:
      const searchTerm = action.payload.toLowerCase();
      return {
        ...state,
        filteredProducts: state.products.filter(
          (product) =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.details.material.toLowerCase().includes(searchTerm) ||
            product.details.unitLength.toLowerCase().includes(searchTerm) ||
            product.details.shape.toLowerCase().includes(searchTerm) ||
            product.price.toString().toLowerCase().includes(searchTerm)
        ),
      };
    default:
      return state;
  }
};

export default productsReducer;
