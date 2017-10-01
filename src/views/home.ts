import * as m from "mithril";
import { ClassComponent, CVnode } from "mithril";

import { Header } from "../components/header";
import { Footer } from "../components/footer";

export class HomeView implements m.ClassComponent<any> {
  public view({ attrs }: CVnode<any>) {
    return m(".page", [
      m(Header),
      m(".view", [
        m("h1", "Home"),
        m("hr"),
      ]),
      m(Footer),
    ]);
  }
}
