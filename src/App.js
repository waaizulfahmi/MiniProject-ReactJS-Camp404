import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Beranda from './components/Beranda';
import Katalog from './components/Katalog';
import Navbar from './components/Navbar';
import Manajemen from './components/Manajemen';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    document.title= "Nike Official Store | Fake "

  }, []);
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path="/" exact element={<Beranda />}></Route>
        <Route path="/katalog" element={<Katalog />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/manajemen' element={<Manajemen />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
