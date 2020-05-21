import React from "react";
import ReactModal from "react-modal";

import ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer";

import "./scss/main.scss";

ReactModal.setAppElement("#root");

ReactDOM.render(<AppContainer />, document.getElementById("root"));
