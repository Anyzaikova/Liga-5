import { FetchReq } from './FetchReq.js';
import { User } from './User.js';
import { UserPatch } from './UserPatch.js';

export class Fasade {
  private fetchReq: FetchReq;

  constructor() {
    this.fetchReq = new FetchReq();
  }

  public postTaskRequest(user: User): void {
    this.fetchReq.postTask(user);
  }

  public getTaskRequest(taskId: number): void {
    this.fetchReq.getTask(taskId);
  }

  public getAllTasksRequest(isImportant: boolean, name_like: string, isCompleted: boolean): void {
    this.fetchReq.getAllTask(isImportant, name_like, isCompleted);
  }

  public patchTaskRequest(user: UserPatch, taskId: number): void {
    this.fetchReq.patchTask(user, taskId);
  }

  public deleteTaskRequest(taskId: number): void {
    this.fetchReq.deleteTask(taskId);
  }
}
