import {IPost, IRes} from "../types";
import {apiService} from "./apiService";
import {urls} from "../consts";

const postService = {
    getAll: (): IRes<IPost[]> => apiService.get(urls.posts.base),
    getById: (id: number): IRes<IPost> => apiService.get(urls.posts.byId(id))
}

export {
    postService
}