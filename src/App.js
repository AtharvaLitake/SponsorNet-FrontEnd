import './App.css';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import Main from './Main/Main';
import Eventform from './Event_details/Eventform';
import Sdetails from './Sponsor_details/Sdetails';
import EventDisplay from './Event_Display/EventDisplay';
import SEvent from './Single_Event/SEvent';
import Applications from './Profile/Applications';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/main' element={<Main></Main>}></Route>
        <Route path='/eventDetails' element={<Eventform></Eventform>}></Route>
        <Route path='/sponsorDetails' element={<Sdetails></Sdetails>}></Route>
        <Route path='/eventDisplay' element={<EventDisplay></EventDisplay>}></Route>
        <Route path='/event' element={<SEvent></SEvent>}></Route>
        <Route path='/application' element={<Applications></Applications>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
