import {useEffect} from "react";


const BasicEffect = () => {

  useEffect(() => {
    console.log("Render once");
  }, []);
  return (
    <div>

    </div>
  );
};

export default BasicEffect;
