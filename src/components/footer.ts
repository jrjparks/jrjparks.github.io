import * as m from "mithril";
import { ClassComponent, CVnode } from "mithril";

export class Footer implements m.ClassComponent<{}> {
  public view({ attrs }: CVnode<{}>) {
    return m("footer", []);
  }
}
