export class Random {

  static id(): string {
    let value = Math.floor(Math.random() * 10000000);
    return value.toString().substr(0, 8);
  }

  static timeout(action: () => void, maxMs: number = 1000) {
    let timeout = Math.floor(Math.random() * maxMs);
    setTimeout(action, timeout);
  }
  
}