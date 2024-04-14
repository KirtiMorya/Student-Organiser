// ResultCom.js
import React from 'react';
import { Outlet} from 'react-router-dom'; // Import Link
import Header from "../Header";

const ResultCom = () => {
  return (
    <div className="app">
      {/* <Header /> */}
    
      <Outlet />
    </div>
  );
};

export default ResultCom;
