import { storage, database } from "../../../firebase/index";
import * as firebase from "firebase";

export const GetAllProjects = (me) => {
  return async (dispatch) => {
    const productsRef = database.collection("projects");
    const projects = [];
    return productsRef
      .get()
      .then((snapshot) => {
        snapshot.forEach((x) => {
          if (x.data().admin == me) {
            projects.push(x.data());
          } else {
            if (x.data().users) {
              x.data().users.map((item) => {
                if (item == me) {
                  projects.push(x.data());
                }
              });
            }
          }
        });
        // console.log("er", lessons);
        dispatch({ type: "GET_ALL_PROJECTS", data: projects });
        return projects;
      })
      .catch((error) => {
        console.log("Помилка: ", error);
      });
  };
};

// export const GetLessonsFirebase = () => {

// }
