import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;

    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const updateProfile = () => {
    // You can handle form submission or extra logic here
    console.log("Updated Profile:", profile);
  };

  return (
    <div>
      <h1>Your name: {profile.name} and age: {profile.age}</h1>

      <input
        type="text"
        id="name"
        name="name" // ✅ needed for dynamic key
        placeholder="Enter name"
        value={profile.name}
        onChange={handleChange}
      />

      <input
        type="text"
        id="age"
        name="age" // ✅ needed for dynamic key
        placeholder="Enter age"
        value={profile.age}
        onChange={handleChange}
      />

      <button onClick={updateProfile}>Update Profile</button>


    </div>
  );
};

export default Profile;
