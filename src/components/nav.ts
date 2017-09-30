import * as m from "mithril";
import { ClassComponent, CVnode } from "mithril";

export class NavBar implements m.ClassComponent<{}> {
  public view({ attrs }: CVnode<{}>) {
    const currentRoute = m.route.get();
    return m("nav", m("ul", [{
      name: "Home",
      route: "/",
    }].map(({ name, route }) => m("li", m("a", {
      class: currentRoute === route ? "active" : "",
      href: route,
      oncreate: m.route.link,
      onupdate: m.route.link,
    }, name)))));
  }
}
