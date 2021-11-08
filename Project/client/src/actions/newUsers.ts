import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from '.';
import { url } from '../directions';

export interface newUser {
	id: number;
	name: string;
	lastName: string;
}

export interface NewUserAction {
  type: ActionTypes.newUsers;
  payload: newUser[];
}


export const newUsers = (user:object) => {
  return async (dispatch: Dispatch)  => {
		const response = await axios.post<newUser[]>(url, user);
		dispatch({
			type: ActionTypes.newUsers,
			payload: response.data,
		});
	};
};