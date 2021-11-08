import { FetchUsersAction} from './fetchUsers';
import { DeleteusersAction} from './deleteUsers';
import { NewUserAction } from './newUsers';


export enum ActionTypes {
  fetchUsers,
  deleteUsers,
  newUsers,
}

export type Action = 
FetchUsersAction | 
DeleteusersAction | 
NewUserAction;
