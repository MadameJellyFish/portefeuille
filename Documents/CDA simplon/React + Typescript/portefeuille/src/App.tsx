import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenseRegistration from './Components/manageExpense/ExpenseRegistration';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Mon Portefeuille Virtuel</h1>
      </header>
      <body>
        <ExpenseRegistration />
      </body>
    </div>
  );
}

export default App;
