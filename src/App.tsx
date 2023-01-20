import React from 'react';

import { Expenses } from './components/Expenses';
import { UserMenu } from './components/UserMenu';
import { Chart } from './components/Chart';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <UserMenu />

        <div className="App__block">
          <Chart />
          <Expenses />
        </div>
      </div>
    </div>
  );
}

export default App;
