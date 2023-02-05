import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { reducer as formReducer } from "redux-form";
import cartReducer from "./Redux/ActionPerForm";
const rootReducer = combineReducers({
  form: formReducer,
  cartReducer,
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
