var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class FetchReq {
    postTask(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = {
                name: user.getName(),
                info: user.getInfo(),
                isImportant: user.getIsImportant(),
            };
            try {
                const _postUrl = FetchReq._url + '/tasks';
                const response = yield fetch(_postUrl, {
                    method: 'POST',
                    body: JSON.stringify(userData),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = yield response.json();
                if (response.ok) {
                    return console.log(data);
                }
                else {
                    throw new Error(`Ошибка! Статус ${response.status}`);
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getTask(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _getUrl = FetchReq._url + `/tasks/${taskId}`;
                const response = yield fetch(_getUrl, {
                    method: 'GET',
                });
                const data = yield response.json();
                if (response.ok) {
                    return console.log(data);
                }
                else {
                    throw new Error(`Ошибка! Статус ${response.status}`);
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getAllTask(isImportant, name_like, isCompleted) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _getUrlAll = FetchReq._url +
                    `/tasks?` +
                    `isImportant=${isImportant}&` +
                    `name_like=${name_like}&` +
                    `isCompleted=${isCompleted}`;
                const response = yield fetch(_getUrlAll, {
                    method: 'GET',
                });
                const data = yield response.json();
                if (response.ok) {
                    return console.log(data);
                }
                else {
                    throw new Error(`Ошибка! Статус ${response.status}`);
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    patchTask(user, taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = {
                name: user.getName(),
                info: user.getInfo(),
                isImportant: user.getIsImportant(),
                isCompleted: user.getIsCompleted(),
            };
            try {
                const _patchTask = FetchReq._url + `/tasks/${taskId}`;
                const response = yield fetch(_patchTask, {
                    method: 'PATCH',
                    body: JSON.stringify(userData),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = yield response.json();
                if (response.ok) {
                    return console.log(data);
                }
                else {
                    throw new Error(`Ошибка! Статус ${response.status}`);
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deleteTask(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _deleteTask = FetchReq._url + `/tasks/${taskId}`;
                const response = yield fetch(_deleteTask, {
                    method: 'DELETE',
                });
                const data = yield response.json();
                if (response.ok) {
                    return console.log(data);
                }
                else {
                    throw new Error(`Ошибка! Статус ${response.status}`);
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
FetchReq._url = 'http://37.220.80.108';
//# sourceMappingURL=FetchReq.js.map