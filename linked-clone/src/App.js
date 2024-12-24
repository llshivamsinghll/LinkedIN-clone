import React from 'react';
import './App.css';  // Make sure this line is not commented out
import Header from './Header'
import Sidebar from './Sidebar';
function App() {
  return (
    <div className='app'>
   <Header/>
   <div className='app_body'>

    <Sidebar />
    
   </div>

    </div>
  );
}

export default App;