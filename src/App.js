import logo from './logo.svg';
import './App.css';
import Add from './componets/Add';
import Search from './componets/Search';
import Viewall from './componets/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes> 
      <Route path="/" element={<Add/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/view" element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
