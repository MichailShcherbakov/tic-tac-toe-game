export class EventListener {
  private readonly buffer: Record<string, ((...args: unknown[]) => void)[]> =
    {};

  public on(event: string, cb: (...args: unknown[]) => void) {
    const existsCbs = this.buffer[event];

    if (existsCbs) {
      existsCbs.push(cb);
    } else {
      this.buffer[event] = [cb];
    }
  }

  public off(event: string, cb: (...args: unknown[]) => void) {
    const existsCbs = this.buffer[event];

    if (!existsCbs) return;

    this.buffer[event] = existsCbs.filter(c => c !== cb);
  }

  public emit(event: string, ...args: unknown[]) {
    const existsCbs = this.buffer[event];

    existsCbs?.forEach(cb => {
      cb(...args);
    });
  }
}
