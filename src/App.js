import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Home from './Home';
import Shopping from './Prod/[id]/Shopping';
import SinglePage from './Prod/[id]/SinglePage';
import Basket from './Basket';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='login' element={<Login/>} />
          <Route path='shopping' element={<Shopping/>} />
          <Route path='shopping/:id' element={<SinglePage/>} />
          <Route path='basket' element={<Basket/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
