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

const initialState = {
  todos: [...JSON.parse(localStorage.getItem("todo"))] || [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((user) =>
          user.id === action.payload ? { ...user, isDone: !user.isDone } : user
        ),
      };
    default:
      return state;
  }
};

export default todos;
