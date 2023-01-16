const isState = { firstname: "", secondname: "" };

const reducer = (state = isState, action) => {
  if (action.type === "SUBMIT") {
    return action.payload;
  }
  return state;
};

export default reducer;
