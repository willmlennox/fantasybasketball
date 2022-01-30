import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  // once hosted change this to actual url
  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    })
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name, 
      username,
    }).then((response) => {
      setListOfUsers([...listOfUsers, {
      name, 
      username,
    }])
    });
  };

  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          );
        })}
      </div>

      <div>
        <input 
          type="text" 
          placeholder="Name..." 
          onChange={(event) => {
            setName(event.target.value)
          }}
        />
        <input 
          type="text" 
          placeholder="setUsername..." 
          onChange={(event) => {
            setUsername(event.target.value)
          }}
        />
        <button onClick={createUser}> Create User </button>
      </div>
    </div>
  );
}

export default App;
