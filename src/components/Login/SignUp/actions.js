import { storage, database } from "../../../firebase/index";
import * as firebase from "firebase";

export const SingUpFirebase = (email, password) => {
  return async () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };
};
