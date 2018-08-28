// tslint:disable-next-line:no-var-requires
require("dotenv").config();
import React from "react";
import { render } from "react-dom";
import App from "./src/app";

render(<App/>, document.getElementById("app"));
