import React from 'react';
import logo from './logo.svg';
import TodoList from './todo/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="content-wrap">
          <img src={logo} className="App-logo" alt="logo" />
          <TodoList />
        </div>
      </header>
    </div>
  );
}

export default App;
