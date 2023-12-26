import { create } from "zustand";

const useStore = create((set) => ({
  mobile: "",
  password: "",
  login: (userObj) =>
    set((state) => {
      localStorage.setItem("user", JSON.stringify(userObj));
      return { ...state, mobile: userObj.mobile, password: userObj.password };
    }),
  logout: () =>
    set((state) => {
      localStorage.removeItem("user");
      return { ...state, mobile: "", password: "" };
    }),

  initStates: () =>
    set((state) => {
      let user = localStorage.getItem("user");
      let userObject = JSON.parse(user);
      if (userObject && "mobile" in userObject && "password" in userObject) {
        return {
          ...state,
          mobile: userObject.mobile,
          password: userObject.password,
        };
      } else {
        return state;
      }
    }),
}));

export default useStore;
