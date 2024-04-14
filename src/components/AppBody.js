import React from 'react';
import { Link } from 'react-router-dom';

const AppBody = () => {
  const imglink="https://i.pinimg.com/originals/15/69/b5/1569b5db8e7783ee5a316ac7d5db616a.png";
  const styleofflex={
    display:"flex",
    flexDirection:"row",
    justifyContent: 'space-around',
  }
  return (
    <div className="button-container" style={styleofflex} >
     <div>
      <div className="button-row">
        <Link to="/result"><button style={buttonStyle}>RESULT TRACKER</button></Link> 
        <Link to="/attendance"><button style={buttonStyle}>ATTENDANCE TRACKER</button></Link>
      </div>
      <div className="button-row">
        <Link to="/expense"><button style={buttonStyle}>EXPENSE TRACKER</button></Link> 
        <Link to="/todo"><button style={buttonStyle}>TASK SCHEDULE</button></Link>
      </div>
      </div> 
      <div className='flex justify-center'> 
        <img className='p-3 image-center' src={imglink} alt="Girl Pic"/>
      </div>
    </div>
  );
}


const buttonStyle = {
    backgroundColor: '#FFCBA4',
    color: 'black',
    padding: '15px 30px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    margin: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    textDecoration: 'none',
    width: '200px', // Set a fixed width for the buttons
    height: '100px', // Set a fixed height for the buttons
  };
  
export default AppBody;
