import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{background:"black",padding:"10px"}}>

      <Link to="/" style={{color:"white",margin:"10px"}}>Home</Link>

      <Link to="/register" style={{color:"white",margin:"10px"}}>Register</Link>

      <Link to="/courses" style={{color:"white",margin:"10px"}}>Course List</Link>

      <Link to="/api" style={{color:"white",margin:"10px"}}>API Data</Link>

    </nav>
  );
}

export default Navbar;