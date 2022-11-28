import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topnav from './components/Navbar/Topnav';
import ItemListContainer from './components/Cart/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Topnav/>
    </div>
     <div className="App">
     <ItemListContainer/>
   </div>
  );
}

export default App;
