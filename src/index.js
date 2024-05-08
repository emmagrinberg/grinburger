import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import App from "./components/app/App";
import {applyMiddleware, compose} from "redux";
import {thunk} from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./services/reducers";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = configureStore({
    reducer: rootReducer,
    enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(enhancer),
});

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path="*" element={ <App /> }/>
              </Routes>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>
);
