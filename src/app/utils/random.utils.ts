export class Random {

  static id(): string {
    let value = Math.floor(Math.random() * 10000000);
    return value.toString().substr(0, 8);
  }

  /*
  * Used to simulate an async action that takes around 1s to complete.
  */
  static timeout(action: () => void, maxMs: number = 1000) {
    let timeout = Math.floor(Math.random() * maxMs);
    setTimeout(action, timeout);
  }
  
}