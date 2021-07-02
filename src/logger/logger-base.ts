import { LoggerManager } from './logger-manager';

export abstract class AwesomeLoggerBase {
  public static isInitialized = false;

  private _lastLine: string = '';
  // @internal
  public scrollAmount: number = 0;
  protected _hasChanges: boolean = true;
  private _clean: boolean = false;

  constructor() {}

  public abstract getNextLine(): string;
  public abstract hasChanges(): boolean;
  public abstract canBeCalledFrom(calledFrom: AwesomeLoggerBase): boolean;
  public abstract needsScroll(): boolean;

  protected changed() {
    this._hasChanges = true;
    LoggerManager.getInstance().loggerChanged(this);
  }

  // @internal
  public render(): string {
    if (this._clean) {
      this._clean = false;
      this._lastLine = '';
      return '';
    }
    if (!this.hasChanges()) {
      return this._lastLine;
    }
    this._hasChanges = false;
    const newLine = this.getNextLine();

    this._lastLine = newLine;
    return newLine;
  }

  public clean(): void {
    if (!this._lastLine) {
      return;
    }
    this._clean = true;
    this.changed();
  }
}
