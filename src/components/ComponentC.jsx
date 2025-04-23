import {useContext} from "react";

import { Data, Data1 } from "./../App.jsx";

const ComponentC = () => {
  const userName = useContext(Data);
  const age = useContext(Data1);
  return (
    <div>
      <h1>{userName} -- {age}</h1>

    </div>
  );
};

export default ComponentC;
