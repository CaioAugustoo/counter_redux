import React from "react";

import Button from "./buttons";
import Global, { Wrapper } from "./styles/Global";
import reduxLogo from "./assets/img/redux.png";

import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  ;

  return (
    <>
      <Provider store={store}>
        <Wrapper>
          <img src={reduxLogo} alt="Redux logo" width="150" />
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button/>
          </div>
          <Global />
        </Wrapper>
      </Provider>
    </>
  );
};

export default App;
