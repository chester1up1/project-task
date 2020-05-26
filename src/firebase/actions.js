import { storage, database } from "./index";
import * as firebase from "firebase";

export const GetUser = () => {
  return async (dispatch) => {
    try {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          dispatch({ type: "GET_USER", data: user });
        }
      });
    } catch (error) {
      console.log("error-->", error);
    }
  };
};

export const SignOutFirebase = () => {
  return async (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(
        function () {
          dispatch({ type: "LOGOUT", data: "" });
        },
        function (error) {
          console.log("// An error happened.");
        }
      );
  };
};
