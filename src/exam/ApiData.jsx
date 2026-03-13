import { useEffect, useState } from "react";
import axios from "axios";

function ApiData(){

  const [posts,setPosts] = useState([]);

  useEffect(()=>{

    axios.get("https://dummy-json.mock.beeceptor.com/posts")
      .then(res => {
        setPosts(res.data);
      })
      .catch(err => {
        console.log(err);
      });

  },[]);

  return(
    <div>

      <h2>API Demo List</h2>

      <table border="1" cellPadding="8">

        <thead>
          <tr>
            <th>User ID</th>
            <th>Post ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Link</th>
          </tr>
        </thead>

        <tbody>

          {posts.map((post)=>(
            <tr key={post.id}>
              <td>{post.userId}</td>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
                <a href={post.link} target="_blank">
                  View
                </a>
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  )
}

export default ApiData;