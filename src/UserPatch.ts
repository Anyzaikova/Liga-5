import { User } from './User.js';
export class UserPatch extends User {
  private readonly _isCompleted: boolean;
  constructor(name: string, info: string, isImportant: boolean, isCompleted: boolean) {
    super(name, info, isImportant);
    this._isCompleted = isCompleted;
  }
  getIsCompleted(): boolean {
    return this._isCompleted;
  }
}
