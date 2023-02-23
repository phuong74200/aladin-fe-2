import { create } from "zustand";

import { User } from "../../../@types/User";
import { authApi } from "../api/authApi";

interface AuthServiceState {
  me: User | null;
  get: () => void;
}

export const useAuthService = create<AuthServiceState>((set) => ({
  me: null,
  get: async () => {
    const user = await authApi.get();
    set({ me: user.data });
  },
}));
