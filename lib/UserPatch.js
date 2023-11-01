import { User } from './User.js';
export class UserPatch extends User {
    constructor(name, info, isImportant, isCompleted) {
        super(name, info, isImportant);
        this._isCompleted = isCompleted;
    }
    getIsCompleted() {
        return this._isCompleted;
    }
}
//# sourceMappingURL=UserPatch.js.map