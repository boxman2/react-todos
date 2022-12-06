const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const removeTodo = (payload) => {
  return { type: REMOVE_TODO, payload };
};

export const completeTodo = (payload) => {
  return { type: COMPLETE_TODO, payload };
};

// const saveData = JSON.parse(localStorage.getItem("todo")) || []; ???? 왜안되는지
const saveData = JSON.parse(localStorage.getItem("todo"))
  ? [...JSON.parse(localStorage.getItem("todo"))]
  : [];
const initialState = {
  todos: [...saveData],
};

//리터러블은 맞는데 데이터가없으니까 그려줄수없어   데이터가없을때를 가정

export const e = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        // ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        // ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case COMPLETE_TODO:
      return {
        // ...state,
        todos: state.todos.map((user) =>
          user.id === action.payload ? { ...user, isDone: !user.isDone } : user
        ),
      };
    default:
      return state;
  }
};
