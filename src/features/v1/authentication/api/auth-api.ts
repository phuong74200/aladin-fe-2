import { UserModel } from "@/@types";
import axiosInstance from "@/axios/axios";

const END_POINT = "/auth";

export const authApi = {
  async get() {
    const response = await axiosInstance.get<UserModel>(END_POINT);
    return response;
  },
};
