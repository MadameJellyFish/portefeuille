import React from 'react';
import euro from './euro.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseSummary from './Components/manageExpense/ExpenseSummary';

function App() {
  return (
    <div className="container mt-3">
      <header className="App-header d-flex f-row">
        <img src={euro} className="App-logo" alt="logo" />
        <h1>Mon Portefeuille Virtuel</h1>
      </header>
      <main>
        <div className='px-5 mx-5 Content'>   
          <ExpenseSummary />
        </div>
      </main>
    </div>
  );
}

export default App;