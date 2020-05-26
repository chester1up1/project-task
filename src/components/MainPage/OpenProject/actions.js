import { storage, database } from "../../../firebase/index";
import * as firebase from "firebase";

export const DeleteProjects = (id) => {
  return async (dispatch) => {
    setTimeout(() => {
      try {
        database.collection("projects").doc(id).delete();
      } catch (error) {
      } finally {
        dispatch({ type: "DELETE_PROJECT", data: id });
      }
    }, 500);
  };
};
export const AddTask = (id, name_task, me) => {
  return async (dispatch) => {
    try {
      const productsRef = database.collection("projects");
      productsRef
        .get()
        .then((snapshot) => {
          snapshot.forEach((x) => {
            if (x.data().key == id) {
              let projRef = database.collection("projects").doc(id);
              let updateSingle = projRef.update({
                tasks: [
                  ...x.data().tasks,
                  { name: name_task, status: "pending", user: "", author: me },
                ],
              });
              dispatch({
                type: "ADD_TASK",
                data: { name: name_task, status: "pending", user: "", id: id },
              });
            }
          });
        })
        .catch((error) => {
          console.log("Помилка: ", error);
        });
    } catch (error) {
      console.log("error", error);
    } finally {
    }
  };
};

export const TakeTask = (id, tasks, name, user) => {
  return async (dispatch) => {
    let new_data = tasks.map((item) =>
      item.name == name ? { ...item, status: "in_process", user: user } : item
    );
    try {
      let projRef = database.collection("projects").doc(id);
      let updateSingle = projRef.update({
        tasks: new_data,
      });
      dispatch({
        type: "TAKE_TASK",
        data: { result: new_data, id: id },
      });
    } catch (error) {}
  };
};

export const DeletTask = (id, tasks, name) => {
  return async (dispatch) => {
    let new_data = tasks.filter((item) => item.name !== name);
    try {
      let projRef = database.collection("projects").doc(id);
      let updateSingle = projRef.update({
        tasks: new_data,
      });
      dispatch({
        type: "DELETE_TASK",
        data: { result: new_data, id: id },
      });
    } catch (error) {}
  };
};

export const FailedTask = (id, tasks, name) => {
  return async (dispatch) => {
    let new_data = tasks.map((item) =>
      item.name == name ? { ...item, status: "pending", user: "" } : item
    );
    try {
      let projRef = database.collection("projects").doc(id);
      let updateSingle = projRef.update({
        tasks: new_data,
      });
      dispatch({
        type: "FAILED_TASK",
        data: { result: new_data, id: id },
      });
    } catch (error) {}
  };
};
export const ComplitedTask = (id, tasks, name) => {
  return async (dispatch) => {
    let new_data = tasks.map((item) =>
      item.name == name ? { ...item, status: "complited" } : item
    );
    try {
      let projRef = database.collection("projects").doc(id);
      let updateSingle = projRef.update({
        tasks: new_data,
      });
      dispatch({
        type: "COMPLITED_TASK",
        data: { result: new_data, id: id },
      });
    } catch (error) {}
  };
};
