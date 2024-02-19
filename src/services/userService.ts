import {IRes} from "../types";
import {IUser} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../consts";

const userService = {
    getAll: (): IRes<IUser[]> => apiService(urls.users.base),
    getById: (id: number): IRes<IUser> => apiService.get(urls.users.byId(id))
}

export {
    userService
}