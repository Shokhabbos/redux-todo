import { TODO } from "../constants/todo";

const initialState = [];
const todos = (state = initialState, action) => {
  switch (action.type) {
    case TODO.ADD_TODO:
      return [...state, action.payload];
    case TODO.REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload.id);
      case TODO.CHECKED_TODO :
        return state.map(item => {
          if(item.id === action.payload.id){
            return{
              ...item,
              status:action.payload.status
            }
          } else{
            return item
          }
        })
        case TODO.SAVE_TODO :
          return action.payload
    default:
      return state;
  }
};

export default todos;
