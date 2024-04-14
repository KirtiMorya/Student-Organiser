//Header.js
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom"; // Import Link
import { FiLogOut } from 'react-icons/fi';
import styled from 'styled-components';
const styleoflink={
  color:"black",
  textDecoration:"none",
  fontWeight:"bold",
  fontSize:"15px",
  cursor: 'pointer' 
}
 
const Header = ({onLogin}) => {
   const handleLogin = () => {
    console.log("clicked")
    onLogin();
  };
  return (
    <div className='flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-50 md:bg-green-100 h-16 sm:h-20 md:h-24'>
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} alt="Logo"/>
      </div>
      <div className="flex items-center" > 
        <ul className="flex p-4 m-4">
          <li className="px-4">
            {/* Use Link with absolute path to home */}
            <Link to="/" style={styleoflink}>Home</Link>
          </li>
          <li className="px-4">
            {/* Use Link with absolute path to Result */}
            <Link to="/result" style={styleoflink}>Result</Link>
          </li>
          <li className="px-4">
            {/* Use Link with absolute path to Attendance */}
            <Link to="/attendance" style={styleoflink}>Attendance</Link>
          </li>
          <li className="px-4">
            {/* Use Link with absolute path to Expense */}
            <Link to="/expense" style={styleoflink}>Expense</Link>
          </li>
          <li className="px-4">
            {/* Use Link with absolute path to To-Do */}
            <Link to="/todo" style={styleoflink}>Planner</Link>
          </li>

          <li className="px-4">
             <FiLogOut className="logout-icon" style={styleoflink} onClick={handleLogin} />
           </li>
          
        </ul>
      </div>
    </div>
  );
};



export default Header;



