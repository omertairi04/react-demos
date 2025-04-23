import {useEffect, useState} from "react";

const FetchDataEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      if (data && data.length) {
        setData(data);
      }
    }
    fetchData();
  }, [])


  return (
    <div>
      {data.map(item => (
        <section key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
          <hr/>
        </section>
      ))}
    </div>
  );
};

export default FetchDataEffect;
