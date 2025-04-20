import {useEffect, useState} from "react";

const ExampleOne = () => {

  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name])

  const handleChange = event => {
    setName(event.target.value);

  }

  const handleClick = () => {
    setName("")
  }

  return <div>
    <h1>Your name: {name}</h1>
    <input type="text" value={name} onChange={handleChange} placeholder="Enter name"/>
    <button onClick={handleClick}>Clear name</button>

  </div>
};

export default ExampleOne;