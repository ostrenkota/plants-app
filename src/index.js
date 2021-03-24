import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import AppModule from "./AppModule";
import './style.scss';
import {Provider} from "react-redux";
import store from "./redux/store";

// Init VK  Mini AppModule
bridge.send("VKWebAppInit");

ReactDOM.render(
    <Provider store={store}>
      <AppModule />
    </Provider>,

    document.getElementById("root")
);


if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
