import { combineReducers } from "redux";
import { usersReducer, newUserReducer } from "./users";
import { User } from "../actions/fetchUsers";
import { newUser } from "../actions/newUsers";

export interface StoreState {
  users: User[];
  newUsers: newUser[];
}

export const reducers = combineReducers<StoreState>({
  users: usersReducer,
  newUsers: newUserReducer,
});
