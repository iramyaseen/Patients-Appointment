import { ADD_ITEM } from "./action";
let localStorageDate = localStorage.getItem("state");
let userImage = localStorage.getItem("image");

const initialState = {
  numOfItems: JSON.parse([localStorageDate]),
  numOfImages: JSON.parse([userImage]),
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default cartReducer;
