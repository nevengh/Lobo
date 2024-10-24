import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AllProduct from './Pages/AllProduct/AllProduct';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/AllProduct' element={<AllProduct/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App