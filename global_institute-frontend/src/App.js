import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
import Course from './components/Course';
import Certificate from './components/Certificate';
function App() {
  return (
  
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/course' element={<Course/>}/>
    <Route path='/certificate' element={<Certificate/>}/>
    
  </Routes>
  </BrowserRouter>

  );
}

export default App;
