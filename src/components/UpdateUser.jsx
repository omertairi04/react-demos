import {useContext, userContext, useState} from "react";
import {UserContext} from "./UserContext.jsx";

const UpdateUser = () => {
  const {updateUser} = useContext(UserContext);
  const [newName, setNewName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newName.trim()) {
      updateUser(newName)
      setNewName("");
    }

  }

  return (<div>
    <h2>Update User Name</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newName}
        onChange={e => setNewName(e.target.value)}
        placeholder="Enter new name"/>
    </form>
    <button type="submit">Update</button>
  </div>);
};

export default UpdateUser;
