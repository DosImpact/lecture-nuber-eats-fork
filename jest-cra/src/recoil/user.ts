import { atom } from "recoil";

interface IAtomUserState {
  isLoggedIn: boolean;
}
export const atomUserState = atom<IAtomUserState>({
  key: "atomUserState",
  default: {
    isLoggedIn: false,
  },
});
