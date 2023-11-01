import { User } from './User.js';
import { UserPatch } from './UserPatch.js';

export class FetchReq {
  private static _url = 'http://37.220.80.108';
  // POST
  async postTask(user: User): Promise<void> {
    const userData = {
      name: user.getName(),
      info: user.getInfo(),
      isImportant: user.getIsImportant(),
    };

    try {
      const _postUrl = FetchReq._url + '/tasks';
      const response = await fetch(_postUrl, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (response.ok) {
        return console.log(data);
      } else {
        throw new Error(`Ошибка! Статус ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // GET
  async getTask(taskId: number): Promise<void> {
    try {
      const _getUrl = FetchReq._url + `/tasks/${taskId}`;
      const response = await fetch(_getUrl, {
        method: 'GET',
      });
      const data = await response.json();
      if (response.ok) {
        return console.log(data);
      } else {
        throw new Error(`Ошибка! Статус ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // GETALLTASKS
  async getAllTask(isImportant: boolean, name_like: string, isCompleted: boolean): Promise<void> {
    try {
      const _getUrlAll =
        FetchReq._url +
        `/tasks?` +
        `isImportant=${isImportant}&` +
        `name_like=${name_like}&` +
        `isCompleted=${isCompleted}`;
      const response = await fetch(_getUrlAll, {
        method: 'GET',
      });
      const data = await response.json();
      if (response.ok) {
        return console.log(data);
      } else {
        throw new Error(`Ошибка! Статус ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  //PATCH
  async patchTask(user: UserPatch, taskId: number): Promise<void> {
    const userData = {
      name: user.getName(),
      info: user.getInfo(),
      isImportant: user.getIsImportant(),
      isCompleted: user.getIsCompleted(),
    };
    try {
      const _patchTask = FetchReq._url + `/tasks/${taskId}`;
      const response = await fetch(_patchTask, {
        method: 'PATCH',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (response.ok) {
        return console.log(data);
      } else {
        throw new Error(`Ошибка! Статус ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  //DELETE
  async deleteTask(taskId: number): Promise<void> {
    try {
      const _deleteTask = FetchReq._url + `/tasks/${taskId}`;
      const response = await fetch(_deleteTask, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (response.ok) {
        return console.log(data);
      } else {
        throw new Error(`Ошибка! Статус ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
