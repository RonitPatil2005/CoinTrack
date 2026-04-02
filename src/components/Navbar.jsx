// import { useContext } from "react";
// import { AppContext } from "../context/AppContext";
// import logo from './assets/Navbarlogo.jpeg';

// const Navbar = () => {
//   const { role, setRole } = useContext(AppContext);

//   return (
//     <div className="navbar">
//       <h1>Finance Dashboard</h1>

//       <select value={role} onChange={(e) => setRole(e.target.value)}>
//         <option value="viewer">Viewer</option>
//         <option value="admin">Admin</option>
//       </select>
//     </div>
//   );
// };

// export default Navbar;

import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import logo from "../assets/Mainlogo.jpeg"; 

const Navbar = () => {
  const { role, setRole } = useContext(AppContext);

  return (
    <nav className="navbar">
      {/* Logo + App Name */}
      <div className="logo">
        <img src={logo} alt="CoinTrack Logo" className="navbar-logo" />
        <h1>CoinTrack</h1>
      </div>

      {/* Role Selector */}
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </nav>
  );
};

export default Navbar;