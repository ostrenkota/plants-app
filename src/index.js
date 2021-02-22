import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import AppModule from "./AppModule";

// Init VK  Mini AppModule
bridge.send("VKWebAppInit");

ReactDOM.render(<AppModule />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
