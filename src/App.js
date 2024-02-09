import './App.css';
import Home from './components/Home/home';
import Accordion from './pages/accordion-app';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/accordion' element={<Accordion />} />
      </Routes>
    </div>
  );
}

export default App;
