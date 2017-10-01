import * as m from "mithril";
import { ClassComponent, CVnode } from "mithril";

import { Header } from "../components/header";
import { Footer } from "../components/footer";

export class ProjectsView implements m.ClassComponent<{}> {
  public view({ attrs }: CVnode<{}>) {
    return m(".page", [
      m(Header),
      m(".view", [
        m("h1", "Projects"),
        m("hr"),
      ]),
      m(Footer),
    ]);
  }
}
