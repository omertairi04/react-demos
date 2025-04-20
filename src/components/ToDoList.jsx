import {useState} from "react";

const ToDoList = () => {
  const [list, setList] = useState([]);

  const createElement = () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    const newList = [...list, {title, description}];
    setList(newList);
  };

  return (
    <div>
      <input type="text" id="title" placeholder="Title"/>
      <input type="text" id="description" placeholder="Description"/>
      <button onClick={createElement}>Add</button>

      <div>
        {list.map(l => (
          <div>
            <li key={Math.random()}>{l.title}</li>
            <li key={Math.random()}>{l.description}</li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;