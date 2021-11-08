import { User } from "../actions/fetchUsers";
import { newUser } from "../actions/newUsers";
import { ActionTypes, Action } from "../actions/index";

export const usersReducer = (state: User[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchUsers:
      return action.payload;
      case ActionTypes.deleteUsers:
      return action.payload;
    default:
      return state;
  }
};


export const newUserReducer = (state: newUser[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.newUsers:
        return action.payload;
    default:
      return state;
  }
};