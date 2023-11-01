import { User } from './User.js';
export class UserFull extends User {
    constructor(name, info, isImportant, isCompleted, id) {
        super(name, info, isImportant);
        this._isCompleted = isCompleted;
        this._id = id;
    }
    getIsCompleted() {
        return this._isCompleted;
    }
    getId() {
        return this._id;
    }
}
//# sourceMappingURL=UserFull.js.map