import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Provider } from 'react-redux'
import configureStore from './store/store'
import App from "./app";

const store = configureStore()

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App></App>
  </Provider>
);
