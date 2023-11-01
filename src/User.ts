export class User {
  private readonly _name: string;
  private readonly _info: string;
  private readonly _isImportant: boolean;

  constructor(name: string, info: string, isImportant: boolean) {
    this._name = name;
    this._info = info;
    this._isImportant = isImportant;
  }

  getName(): string {
    return this._name;
  }

  getInfo(): string {
    return this._info;
  }

  getIsImportant(): boolean {
    return this._isImportant;
  }
}
