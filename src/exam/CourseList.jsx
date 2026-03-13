import { useEffect, useState } from "react";

function CourseList(){

  const [courses, setCourses] = useState([]);

  useEffect(()=>{

    const data = JSON.parse(localStorage.getItem("courses")) || [];
    setCourses(data);

  },[]);

  return(
    <div>

      <h2>Registered Courses</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Phone</th>
            <th>Semester</th>
          </tr>
        </thead>

        <tbody>

          {courses.map((c,index)=>(
            <tr key={index}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.course}</td>
              <td>{c.phone}</td>
              <td>{c.semester}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  )
}

export default CourseList;