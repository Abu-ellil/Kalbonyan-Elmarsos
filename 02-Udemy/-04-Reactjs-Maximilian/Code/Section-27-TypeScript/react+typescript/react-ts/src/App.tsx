
import { useState } from "react";

import NewTodo from "./NewTodo";
import Todos from "./components/Todos";
import Todo from "./components/models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;


// import {useState} from 'react';

// import NewTodo from './NewTodo';
// import Todos from './components/Todos';
// import Todo from './components/models/todo';

// function App() {

//   const [todos, setTodos] = useState<Todo[]>([])

  
//   const addTodoHandler = (todoText: string)=>{
//     const newTodo = new Todo(todoText)
    
//     setTodos((currentst) => {
//       return currentst.concat(newTodo);
//     });
//   }
  
//    const removeTodoHandler = (todoId: string) => {
//      setTodos((currentst) => {
//        return currentst.filter((todo) => todo.id !== todoId);
//      });
//    };
//   return (
//     <div>
//    <NewTodo onAddTodo={addTodoHandler}/>
//    <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
//     </div>
//   );
// }

// export default App;
