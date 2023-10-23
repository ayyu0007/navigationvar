import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Five = () => {
    const [data, setData] = useState([]);
    console.log(data);
  
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
        console.log(res.data);
        setData(res.data);
      });
    }, []);
  
    return (
      <div>
        <div>
          {data.map((e, ind) => {
            return <h1 key={ind}>{e.id} . {e.title}</h1>;
          })}
        </div>
      </div>
    );
}

export default Five
