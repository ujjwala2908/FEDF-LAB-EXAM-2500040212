import { useEffect, useState } from "react";

function ApiData(){

  const [data,setData] = useState([]);

  useEffect(()=>{

    fetch("https://dummy-json.mock.beeceptor.com/posts")
      .then(res=>res.json())
      .then(data=>setData(data));

  },[])

  return(
    <div>

      <h2>API Data</h2>

      {data.map((user)=>(
        <p key={user.id}>
          {user.name} - {user.email}
        </p>
      ))}

    </div>
  )
}

export default ApiData;