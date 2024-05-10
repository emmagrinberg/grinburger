import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import App from "./components/app/App";
import {applyMiddleware, compose, createStore} from "redux";
import {thunk} from "redux-thunk";
import {rootReducer} from "./services/reducers";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

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
