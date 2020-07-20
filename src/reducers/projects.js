const defaultState = {
  load: false,
  items: [],
  path: false,
};

const projects = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_ALL_PROJECTS":
      return {
        ...state,
        load: true,
        items: action.data.sort(function (a, b) {
          return new Date(a.deadline) - new Date(b.deadline);
        }),
      };
    case "DELETE_PROJECT":
      return {
        ...state,
        load: true,
        items: state.items.filter((item) => item.key !== action.data),
      };

    case "ADD_TASK":
      return {
        ...state,
        load: true,
        items: state.items.map((item) =>
          item.key == action.data.id
            ? { ...item, tasks: [...item.tasks, action.data] }
            : item
        ),
      };
    case "TAKE_TASK":
      return {
        ...state,
        load: true,
        items: state.items.map((item) =>
          item.key == action.data.id
            ? { ...item, tasks: action.data.result }
            : item
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        load: true,
        items: state.items.map((item) =>
          item.key == action.data.id
            ? { ...item, tasks: action.data.result }
            : item
        ),
      };
    case "FAILED_TASK":
      return {
        ...state,
        load: true,
        items: state.items.map((item) =>
          item.key == action.data.id
            ? { ...item, tasks: action.data.result }
            : item
        ),
      };
    case "COMPLITED_TASK":
      return {
        ...state,
        load: true,
        items: state.items.map((item) =>
          item.key == action.data.id
            ? { ...item, tasks: action.data.result }
            : item
        ),
      };
    case "CONNECT":
      return {
        ...state,
        path: true,
      };
    default:
      return state;
  }
};

export default projects;
