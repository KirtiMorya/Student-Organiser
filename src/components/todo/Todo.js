// import React, { useState } from 'react';
// import TodoForm from './TodoForm';
// import { RiCloseCircleLine } from 'react-icons/ri';
// import { TiEdit } from 'react-icons/ti';
// import './todo.css'
// const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
//   const [edit, setEdit] = useState({
//     id: null,
//     value: ''
//   });

//   const submitUpdate = value => {
//     updateTodo(edit.id, value);
//     setEdit({
//       id: null,
//       value: ''
//     });
//   };

//   if (edit.id) {
//     return <TodoForm edit={edit} onSubmit={submitUpdate} />;
//   }

//   return todos.map((todo, index) => (
    
//     <div
//       className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
//       key={index}
//     >
//       <div key={todo.id} onClick={() => completeTodo(todo.id)} className='todo-tasktext'>
//         {todo.text}
//       </div>
//       <div className='icons'>
//         <RiCloseCircleLine style={{color:"black"}}
//           onClick={() => removeTodo(todo.id)}
//           className='delete-icon'
//         />
//         <TiEdit  style={{color:"black"}}
//           onClick={() => setEdit({ id: todo.id, value: todo.text })}
//           className='edit-icon'
//         />
//       </div>
//     </div>
//   ));
// };

// export default Todo;
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import './todo.css'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    deadline: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value, edit.deadline);
    setEdit({
      id: null,
      value: '',
      deadline: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine style={{color:"black"}}
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit  style={{color:"black"}}
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;