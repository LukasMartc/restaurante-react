import { Routes, Route, Navigate } from 'react-router-dom';
import { Fragment } from 'react';
import Inicio from './views/Inicio';
import Menu from './views/Menu';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Fragment>
  );
}

export default App;
