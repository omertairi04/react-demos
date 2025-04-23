import {useContext, userContext} from "react";
import {UserContext} from "./UserContext.jsx";

const UserProfile = () => {
  const {user} = useContext(UserContext)

  return (
    <div>
      <h1>User Profile</h1>
      <p>{user.name}</p>
    </div>
  );
};

export default UserProfile;
