import { storage, database } from "../../../firebase/index";
import * as firebase from "firebase";

export const CreateProjectFirebase = (data) => {
  return async (dispatch) => {
    try {
      let setDoc = database
        .collection("projects")
        .doc(`${data.key}`)
        .set(data)
        .then(() => dispatch({ type: "NEW_PROJECT", data: data }));
    } catch (error) {
      console.log("error", error);
    }
  };
};
