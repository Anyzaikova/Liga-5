import { Fasade } from './Fasade.js';
import { UserPatch } from './UserPatch.js';
import { User } from './User.js';
const facade = new Fasade();
const user = new User('hello', 'dfwefwef', false);
facade.postTaskRequest(user);
facade.getTaskRequest(334);
facade.getAllTasksRequest(true, ' ', true);
const user1 = new UserPatch('Lorem', 'Hello', true, true);
facade.patchTaskRequest(user1, 333);
facade.deleteTaskRequest(334);
//# sourceMappingURL=MainFasade.js.map