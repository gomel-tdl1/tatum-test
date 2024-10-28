import { create } from "zustand";

interface State {
  addressInput: string;
}

interface Action {
  setAddress: (addr: string) => void;
  reset: () => void;
}

const initialState: State = {
  addressInput: "",
};

export const useAddressStore = create<State & Action>((set) => ({
  ...initialState,
  setAddress: (addr) => set({ addressInput: addr }),
  reset: () => set(initialState),
}));
