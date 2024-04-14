// Res.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import ResultCom from './ResultCom';
import Body from './Body';
import GpaCalculator from './GpaCalculator';
import CgpaCalculator from './CgpaCalculator';

const Res = () => {
  return (
    <Routes>
      <Route path="/" element={<ResultCom />}>
        <Route index element={<Body />} /> {/* Use 'index' for the root route */}
        <Route path="/gpa" element={<GpaCalculator />} />
        <Route path="/cgpa" element={<CgpaCalculator />} />
      </Route>
    </Routes>
  );
};

export default Res;
