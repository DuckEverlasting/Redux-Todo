import React from 'react';
import "./app.css"
import TodoContainer from "./components/TodoContainer";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <h1>HERE IS WHAT THERE IS TO DO</h1>
      <TodoContainer />
      <TodoForm />
    </div>
  );
}

export default App;
