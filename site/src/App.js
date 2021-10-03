import { useState, useEffect } from "react";
import { userRequest } from "./hooks/fetchUsers";
const App = () => {
  //Save value in state
  const [name, setName] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  //If the state of the name changes then it executes the function
  useEffect(() => {
    getAllUsers();
  }, [name]);

  // Get all users
  const getAllUsers = async () => {
    //Create Get request
    const res = await userRequest("GET");
    //If the response is ok
    if (res) {
      //Get the data
      let json = await res.json();
      setAllUsers(json);
    } else {
      //If the response is not ok
      alert("All users HTTP-Error: " + res.status);
    }
  };

  //Create User
  const onSubmit = async (e) => {
    e.preventDefault();
    //Create Post request
    const res = await userRequest("POST", name);
    //If the response is ok
    if (res) {
      //Get the data
      setName("");
      getAllUsers();
    } else {
      //If the response is not ok
      alert("onSubmit HTTP-Error: " + res.status);
    }
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" onClick={(e) => onSubmit(e)} />
      </form>

      <h3>All Users</h3>
      <ul>
        {allUsers.map((user, i) => (
          <li key={i}>{`${i}: ${user.name}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
