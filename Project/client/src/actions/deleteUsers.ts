import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from '.';
import { User } from './fetchUsers';
import { urlDelete } from '../directions';

export interface DeleteusersAction {
  type: ActionTypes.deleteUsers;
  payload: User[];
}


export const deleteUsers = (id:number) => {
  return async (dispatch: Dispatch)  => {
		const response = await axios.delete<User[]>(urlDelete + id);
		dispatch({
			type: ActionTypes.deleteUsers,
			payload: response.data,
		});
	};
};