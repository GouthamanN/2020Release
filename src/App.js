import React from "react";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HookCakeContainer from './components/HookCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import store from './Redux/store'

import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HookCakeContainer/>
        <CakeContainer />
        <IceCreamContainer/>
        <NewCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
