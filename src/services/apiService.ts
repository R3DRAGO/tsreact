import axios from "axios";

import {baseURL} from "../consts";

const apiService = axios.create({baseURL})

export {
    apiService
}