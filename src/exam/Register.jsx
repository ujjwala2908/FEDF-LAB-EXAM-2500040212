import { useState } from "react";

function Register() {

  const [form, setForm] = useState({
    name: "",
    course: "",
    id: "",
    email: "",
    outcomes: ""
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingCourses =
      JSON.parse(localStorage.getItem("courses")) || [];

    const updatedCourses = [...existingCourses, form];

    localStorage.setItem("courses", JSON.stringify(updatedCourses));

    alert("Course Added Successfully");

    setForm({
      name: "",
      course: "",
      id: "",
      email: "",
      outcomes: ""
    });
  };

  return (
    <div>

      <h2>Want to Offer a Course? Register Here </h2>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Instructor Name"
          value={form.name}
          onChange={handleChange}
        /><br/><br/>

        <input
          name="course"
          placeholder="Course Name"
          value={form.course}
          onChange={handleChange}
        /><br/><br/>

        <input
          name="id"
          placeholder="Course ID"
          value={form.id}
          onChange={handleChange}
        /><br/><br/>

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        /><br/><br/>

        <input
          name="outcomes"
          placeholder="Course Outcomes"
          value={form.outcomes}
          onChange={handleChange}
        /><br/><br/>

        <button type="submit">Add Course</button>

      </form>

    </div>
  );
}

export default Register;