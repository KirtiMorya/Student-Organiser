// import React, { useState, useEffect, useRef } from 'react';
// import './todo.css'
// function TodoForm(props) {
//   const [input, setInput] = useState(props.edit ? props.edit.value : '');

//   const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current.focus();
//   });

//   const handleChange = e => {
//     setInput(e.target.value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     props.onSubmit({
//       id: Math.floor(Math.random() * 10000),
//       text: input
//     });
//     setInput('');
//   };

//   return (
//     <form onSubmit={handleSubmit} className='todo-form'>
//       {props.edit ? (
//         <>
//           <input
//             placeholder='Update your item'
//             value={input}
//             onChange={handleChange}
//             name='text'
//             ref={inputRef}
//             className='todo-input edit'
//           />
//           <button onClick={handleSubmit} className='todo-button edit'>
//             Update
//           </button>
//         </>
//       ) : (
//         <div className="head-bar">
//           <input
//             placeholder='Add a todo'
//             value={input}
//             onChange={handleChange}
//             name='text'
//             className='todo-input'
//             ref={inputRef}
//           />
//           <button onClick={handleSubmit} className='todo-button'>
//             Add todo
//           </button>
//         </div>
//       )}
//     </form>
//   );
// }

// export default TodoForm;

import React, { useState, useEffect, useRef } from 'react';
import './todo.css'
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const [deadline, setDeadline] = useState(props.edit ? props.edit.deadline : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleDeadlineChange = e => {
    setDeadline(e.target.value);
  };
  
  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      deadline: deadline
    });
    setInput('');
    setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <input
            type='date'
            value={deadline}
            name='deadline'
            className='todo-deadline'
            onChange={handleDeadlineChange}
          />
          <button onClick={handleSubmit} className='todo-button edit'> Update </button>
        </>
      ) : (
        <div className="head-bar">
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <input
            type='date'
            value={deadline}
            name='deadline'
            className='todo-deadline'
            onChange={handleDeadlineChange}
          />
          <button onClick={handleSubmit} className='todo-button'>Add todo</button>
        </div>
      )}
    </form>
  );
}

export default TodoForm;