import React from 'react';

import './App.css';
import Headers from './components/Headers';
import SideBar from './components/SideBar';

function App() {
  return (
      <div className="app">
       
        {/* header  */}
        <Headers />
        {/* App Body  */}
        <div className="app__body">
          <SideBar />
        </div>
        {/* SideBar  */}

        {/* Feed   */}

        {/* Widgets    */}
      
      </div>
  );
}

export default App;
