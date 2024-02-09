import './App.css';
import Nav from './components/NavBar/nav';
import Home from './components/Home/home';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nav' element={<Nav />} />
      </Routes>
    </div>
  );
}

export default App;
