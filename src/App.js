import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Shop from './components/Shop/Shop';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
