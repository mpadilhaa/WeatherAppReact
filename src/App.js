import {BsWind,BsFillDropletFill} from 'react-icons/bs'
import {HiLocationMarker} from 'react-icons/hi'
import {FaSearch} from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div className="App">
   <div className="container">

   <h3>confira o clima de uma cidade:</h3>
<div className="form">

  <input type="text" placeholder='digite aqui local'/>
  <button><FaSearch/></button>
</div>
<div className="result">
    <div className="city-status">
    <span><HiLocationMarker size={30}/></span>
    <h2>hamburg</h2>
   <img src="" alt="" />
    </div>

    <div className="city-results">
    <span>9%</span>
    <div className='weather'>
    <h3>Nublado</h3>
    <h3>icon</h3>
    </div>
   
    </div>
<div className="wind-humidity">
  <div><span><BsFillDropletFill /></span>
  <p>91%</p></div>
  
  <div><span><BsWind/></span>
  <p>91%</p></div>
  
</div>
</div>
   </div>
    </div>
  );
}

export default App;
