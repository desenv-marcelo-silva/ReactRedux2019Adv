import React from "react";
import ReactDOM from "react-dom";

import App from "../App";

it("mostrar um comment box", () => {
  const div = document.createElement("div");

  ReactDOM.render(<App />, div);

  console.log(div.innerHTML);

  ReactDOM.unmountComponentAtNode(div);
});
