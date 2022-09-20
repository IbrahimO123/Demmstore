import React, { useEffect, useState } from "react";
import axios from "axios";

const Loading = () => 
  <div>Loading...</div>

function Pagination() {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(
    () => async () => {
      try {
        const result = await axios.get(url);
        result.data = result.data.splice(0, 10);
        setData(prevData =>  result.data);
        setLoading(false);
      } catch (err) {
        setLoading(true);
        console.log(err);
      }
    },
    [url, data]
  );

  return (
      isLoading ? <Loading /> :  <section>
      <div>PAGINATION</div>
      {
        data.map(
            (item) => 
              <div key={item.id} >
                   <h3>Title : {item.title}</h3>
                   <p><img alt={item.title} src={item.thumbnailUrl}></img></p>
                   <p><span>Url: {item.url}</span> <span>{item.albumId}</span></p>
                   
              </div>
            
        )
      }
    </section> 
  );
}

export default Pagination;
