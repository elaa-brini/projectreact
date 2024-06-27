
import logo from './logo.svg';
import './App.css';
import { useState,Switch } from 'react';
import Login from './Component/Login';
import Home from './Component/Home';
import AddModal from './Component/AddModal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GenreList from './Component/Genrelist';

function App() {
  const [page, setpage] = useState(0)

  return (
    <div className="App">
      
      <Routes>
      <Route path='/' element = {<Login/>}/>
      <Route path='/Home' element = {<Home/>}/>
      </Routes>
      
      

    </div>
  );
}

export default App;