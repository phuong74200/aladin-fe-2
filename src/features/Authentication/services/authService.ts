import { create } from "zustand";

import { UserModel } from "../../../@types/models/UserModel";
import { authApi } from "../api/authApi";

interface AuthServiceState {
    me: UserModel | null;
    get: () => void;
}

export const useAuthService = create<AuthServiceState>((set) => ({
    me: null,
    get: async () => {
        const user = await authApi.get();
        set({ me: user.data });
    },
}));
