import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import MyButton from './components/MyButton';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Detail from './pages/Detail';


function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/detail" element={<Detail/>}/>
      </Routes>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
