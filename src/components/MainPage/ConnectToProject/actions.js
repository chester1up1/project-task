import { storage, database } from "../../../firebase/index";
import * as firebase from "firebase";
export const Connect = (key_, me) => {
  return async (dispatch) => {
    try {
      const productsRef = database.collection("projects");
      const project = [];
      const even = (item) => item !== me;
      productsRef
        .get()
        .then((snapshot) => {
          snapshot.forEach((x) => {
            if (x.data().key == key_) {
              project.push(x.data());
            }
          });
          if (project.length !== 0) {
            if (project[0].admin !== me) {
              if (project[0].users.length == 0) {
                let projRef = database
                  .collection("projects")
                  .doc(project[0].key);
                projRef.update({
                  users: [...project[0].users, me],
                  users_count: project[0].users_count + 1,
                });
                dispatch({ type: "CONNECT", data: true });
              }
              if (project[0].users.some(even)) {
                let projRef = database
                  .collection("projects")
                  .doc(project[0].key);
                projRef.update({
                  users: [...project[0].users, me],
                  users_count: project[0].users_count + 1,
                });
                dispatch({ type: "CONNECT", data: true });
              } else {
              }
            } else {
              dispatch({ type: "CONNECT", data: true });
            }
          }
          return project;
        })
        .catch((error) => {});
    } catch (error) {}
  };
};
