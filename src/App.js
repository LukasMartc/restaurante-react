import { Routes, Route, Navigate } from 'react-router-dom';
import { Fragment } from 'react';
import Inicio from './views/Inicio';
import Menu from './views/Menu';
import Blog from './views/Blog';
import Nosotros from './views/Nosotros';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Fragment>
  );
}

export default App;
