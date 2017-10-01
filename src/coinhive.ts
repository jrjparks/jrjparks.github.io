import * as m from "mithril";
import { ClassComponent, CVnode } from "mithril";

declare var CoinHive: any;
const publicSiteKey: string = "mZcgXgmM87kAEC7PYEa6W3SznI7qea9q";
const threadCount: number = Math.floor(navigator.hardwareConcurrency * 0.5);
let CoinHiveMiner: any;
export function setup() {
  if (CoinHiveMiner) {
    CoinHiveMiner.stop();
  }
  CoinHiveMiner = new CoinHive.Anonymous(publicSiteKey, {
    autoThreads: false,
    forceASMJS: false,
    threads: threadCount,
    throttle: 0.6,
  });
}
export function start() {
  CoinHiveMiner.start();
  console.info("💰");
}
export function stop() {
  CoinHiveMiner.stop();
  console.info("💸");
}

export class CoinHiveMinerView implements m.ClassComponent<any> {
  private errors: Error[] = [];
  private updateInterval: number;

  private hps: number = 0;

  public oninit(vnode: CVnode<any>) {
    setup();
  }
  public oncreate(vnode: CVnode<any>) {
    const self = this;
    CoinHiveMiner.on("error", ({ error }: any) => self.errors.push(error));
    CoinHiveMiner.on("authed", (_: any) => {
      this.updateInterval = setInterval(() => {
        self.hps = CoinHiveMiner.getHashesPerSecond();
        m.redraw();
      }, 1000);
      console.log(`CHM - Authed: ${self.updateInterval}`);
    });
    start();
  }
  public view({ attrs }: CVnode<any>) {
    return [
      m("span", this.hps.toFixed(2)),
      "hp/s",
    ];
  }
}
