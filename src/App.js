import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './Components/Register';
import Home from './Components/Home'
import Personid from './Components/Personid';
import Edit from './Components/Edit';
function App() {
  return (
    <>

      <Router>
       
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/edit/:id' element={<Edit></Edit>} ></Route>
          <Route path='/view/:id' element={<Personid></Personid>} ></Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;
