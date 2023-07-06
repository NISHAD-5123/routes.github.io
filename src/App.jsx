import {React,useEffect,useState} from 'react';
import About from './About';
import Service from './Service';
import Menu from './Menu';
import './index.css';
import {Routes , Route ,useLocation,useNavigate} from 'react-router-dom';

const App = () => {
  const[data, setData] = useState(0);
  const location = useLocation();
  const Navigate = useNavigate();

  const Back =()=>{
   Navigate('/');
  }
  console.log(Navigate);

  useEffect(()=>{
      document.title=`You Clicked Me ${data} Times`;
  },[data]);

  const Event = ()=>{
    setData(data + 1);
  }

  return (
    <>
  <Menu />
  <Routes>
    <Route path="/" Component={About}>  </Route>
    <Route exact path="/service/:name" Component={Service}> </Route>
    <Route exact path="/service/:firstName/:lastName" Component={Service}> </Route>
  </Routes>
  <br />
   <button onClick={Event}> Click Me</button><br />
   <h2> My url is {location.pathname}</h2><br />
   <button onClick={Back}> Back</button>
    </>
  )
}
export default App;