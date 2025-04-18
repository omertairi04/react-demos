
const UserList = () => {
  const users = [
    {
      id: 1,
      name: "Omer",
      age: 25
    },
    {
      id: 2,
      name: "Lina",
      age: 22
    },
    {
      id: 3,
      name: "Marko",
      age: 28
    }
  ];

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>Name: {user.name}</h2>
          <h3>Age: {user.age}</h3>
        </div>
      ))}
    </div>
  )

}

export default UserList;