import { User } from "~/@types";
import axiosInstance from "~/axios/axios";

const END_POINT = "/auth";

export const authApi = {
    async get() {
        const response = await axiosInstance.get<User>(END_POINT);
        return response;
    },
};
