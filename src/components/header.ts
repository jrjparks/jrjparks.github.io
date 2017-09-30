import * as m from "mithril";
import { ClassComponent, CVnode } from "mithril";
import { NavBar } from "./nav";

export class Header implements m.ClassComponent<{}> {
  public view({ attrs }: CVnode<{}>) {
    return m("header", m(NavBar));
  }
}
