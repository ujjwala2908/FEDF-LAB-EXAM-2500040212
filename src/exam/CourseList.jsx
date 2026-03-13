import { useEffect, useState } from "react";

function CourseList(){

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("courses")) || [];
    setCourses(data);
  }, []);

  return(
    <div>

      <h2>Courses Offered</h2>

      <table border="1">

        <thead>
          <tr>
            <th>Instructor</th>
            <th>Course Name</th>
            <th>Course ID</th>
            <th>Email</th>
            <th>Outcomes</th>
          </tr>
        </thead>

        <tbody>

          {courses.map((c,index)=>(
            <tr key={index}>
              <td>{c.name}</td>
              <td>{c.course}</td>
              <td>{c.id}</td>
              <td>{c.email}</td>
              <td>{c.outcomes}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  )
}

export default CourseList;