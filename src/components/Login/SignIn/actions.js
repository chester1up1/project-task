import { storage, database } from "../../../firebase/index";
import * as firebase from "firebase";

export const SignInFirebase = (email, password) => {
  return async (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        dispatch({ type: "LOGIN", data: true });
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };
};
