//App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';
// import Attendance from './components/attend/Attendance';
// import TodoList from './components/todo/TodoList';
// import Expense from './components/Expense/Expense';
// import Res from './components/Result/Res';
// import Header from './components/Header';
// import AppBody from './components/AppBody';


// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <h1>Student Organiser</h1>
//         <Header/>
//       </div>
//       <Routes>
//         <Route path="/" element={<AppBody/>}/>
//         <Route path="/attendance" element={<Attendance/>} />
//         <Route path="/todo" element={<TodoList />} />
//         <Route path="/result/*" element={<Res />} /> {/* Adjust the route path */}
//         <Route path="/expense" element={<Expense />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Attendance from './components/attend/Attendance';
import TodoList from './components/todo/TodoList';
import Expense from './components/Expense/Expense';
import Res from './components/Result/Res';
import Header from './components/Header';
import AppBody from './components/AppBody';
import Login from './components/Login'; // Import the Login component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    console.log(isLoggedIn);
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <Router>
      <div className="App">
                <h1 style={{
            background: '-webkit-linear-gradient(left, #7d7bc7, #e2a5b8)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>STUDENT ORGANISER</h1>

        {!isLoggedIn && <Login onLogin={handleLogin} />}
        {isLoggedIn && <Header onLogin={handleLogin}/>}
      </div>
      {isLoggedIn && (
        <Routes>
          <Route path="/" element={<AppBody />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/result/*" element={<Res />} /> {/* Adjust the route path */}
          <Route path="/expense" element={<Expense />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;


