import React, { useEffect } from "react";
import "./App.css";
import { StoreState } from "../src/reducers/index";
import { User, fetchUsers } from "../src/actions/fetchUsers";
import { deleteUsers } from "../src/actions/deleteUsers";
import { connect } from "react-redux";
import { newUsers } from "../src/actions/newUsers";

//////////////////////           function          ///////////////////////////
interface AppProps {
  deleteUsers(id: number): any;
  users: User[];
  fetchUsers(): any;
  newUsers(newUser: object): any;
}

function App(props: AppProps) {
  const { users, fetchUsers, deleteUsers, newUsers } = props;
  const [newUser, setNewUser] = React.useState({	
    name: "",
    lastName: "" 
  });

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (e: any) => {
    e.preventDefault();
    deleteUsers(parseInt(e.target.value, 10));
    fetchUsers();
  };

  const handleChange = (e: any) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    newUsers(newUser);
    setNewUser({
      name: "",
      lastName: ""
    });
  };


  return (
    <div>
      Hello Henrys
      <div>
        <button onClick={fetchUsers}>FETCH USERS!</button>
        {users.map((user: User) => {
          return (
            <div key={user.id}>
              {user.id} {user.name}
              <button
                value={user.id}
                onClick={(e) => {
                  handleDelete(e);
                }}
              >
                DELETE
              </button>
            </div>
          );
        })}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <h3>Create a User</h3>
        <p>
        <input
          name="name"
          type="text"
          placeholder="Name..."
          value={newUser.name}
          onChange={handleChange}
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name..."
          value={newUser.lastName}
          onChange={handleChange}
        />
        </p>
        <input type="submit" value="Create" />
      </form>
    </div>
  );
}

const mapStateToProps = (state: StoreState): { users: User[] } => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchUsers, deleteUsers, newUsers })(App);

/////////////////////           classes           //////////////////////

/* interface AppProps {
  title: string;
} 

  interface AppState {
  counter: number;
}

class App extends React.Component {
	render() {
		return (
			<div>
        <h3>Henry Workshop</h3>
			</div>
		);
	}
}

export default App; */
