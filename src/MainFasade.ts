import { Fasade } from './Fasade.js';
import { UserPatch } from './UserPatch.js';
import { User } from './User.js';

const facade = new Fasade();

// POST FETCH
const user = new User('hello', 'dfwefwef', false);
facade.postTaskRequest(user);

// // GET FETCH
facade.getTaskRequest(334);

//  // GET ALL TASKS FETCH
facade.getAllTasksRequest(true, ' ', true);

// // PATCH FETCH
const user1 = new UserPatch('Lorem', 'Hello', true, true);
facade.patchTaskRequest(user1, 333);

// // DELETE FETCH
facade.deleteTaskRequest(334);
