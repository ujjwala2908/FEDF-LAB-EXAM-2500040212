import { useState } from "react";

function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    phone: "",
    semester: ""
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // get existing data
    const existing = JSON.parse(localStorage.getItem("courses")) || [];

    // add new data
    const updated = [...existing, form];

    // store again
    localStorage.setItem("courses", JSON.stringify(updated));

    alert("Course Registered Successfully");

    setForm({
      name: "",
      email: "",
      course: "",
      phone: "",
      semester: ""
    });
  };

  return (
    <div>

      <h2>Course Registration</h2>

      <form onSubmit={handleSubmit}>

        <input name="name" placeholder="Name"
        value={form.name}
        onChange={handleChange} /><br/><br/>

        <input name="email" placeholder="Email"
        value={form.email}
        onChange={handleChange} /><br/><br/>

        <input name="course" placeholder="Course"
        value={form.course}
        onChange={handleChange} /><br/><br/>

        <input name="phone" placeholder="Phone"
        value={form.phone}
        onChange={handleChange} /><br/><br/>

        <input name="semester" placeholder="Semester"
        value={form.semester}
        onChange={handleChange} /><br/><br/>

        <button type="submit">Register</button>

      </form>

    </div>
  );
}

export default Register;