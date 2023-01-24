import React from 'react';

import { Expenses } from './components/Expenses/Expenses';
import { UserMenu } from './components/UserMenu';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <UserMenu />

        <div className="App__block">
          <Expenses />
        </div>
      </div>
    </div>
  );
}

export default App;
