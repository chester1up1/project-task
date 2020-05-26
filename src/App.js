import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import DefaultRouter from "./components/Routers/DefaultRouter";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <DefaultRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
