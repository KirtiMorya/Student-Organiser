// Body.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation


function Body() {
  const location = useLocation(); // Get the current location

  return (
    <div className='text-center'>
      <h1 className='font-bold my-6 text-2xl'>Welcome to GPA and CGPA Calculator</h1>
      <h2 className='font-bold text-lg'>Please select an option</h2>
      <div>
        {/* Use Link with relative paths */}
        <Link to={`${location.pathname}/gpa`}>
          <button className='p-2 m-2 bg-orange-400 rounded-lg btn-text-lg'>GPA </button>
        </Link>
        {/* Use Link with relative paths */}
        <Link to={`${location.pathname}/cgpa`}>
          <button className='p-2 m-2 bg-orange-400 rounded-lg btn-text-lg'>CGPA </button>
        </Link>
      </div>
      <div className='flex justify-center'> 
        <img className='p-3 image-center' src="https://t3.ftcdn.net/jpg/03/88/07/70/360_F_388077035_RUMOBG7VgNqQ55iiy4o2rGUHsywYsmxA.jpg" alt="Girl Pic"/>
      </div>
    </div>
  );
}

export default Body;
