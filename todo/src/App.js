import React from 'react';
import "./app.css"
import TodoContainer from "./components/TodoContainer";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <TodoContainer />
      <TodoForm />
    </div>
  );
}

export default App;
