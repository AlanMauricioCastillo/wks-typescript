import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from '.';
import { url } from '../directions';


export interface User {
	id: number;
	name: string;
	lastName: string;
}


export interface FetchUsersAction {
  type: ActionTypes.fetchUsers;
  payload: User[];
}


export const fetchUsers = () => {
  return async (dispatch: Dispatch)  => {
		const response = await axios.get<User[]>(url);
		dispatch({
			type: ActionTypes.fetchUsers,
			payload: response.data,
		});
	};
};