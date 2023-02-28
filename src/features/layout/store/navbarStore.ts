import { create } from "zustand";

interface NavbarState {
    isOpen: boolean;
    setOpen: (state: boolean) => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
    isOpen: false,
    setOpen: (state: boolean) => {
        set({ isOpen: state });
    },
}));
