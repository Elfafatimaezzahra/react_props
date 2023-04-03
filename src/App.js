import './App.css';
import Profile from './Profile/componentProfile';
import myImg from './Profile/myImg.png'

function App() {
  return (
    <div className="App">
      <Profile>
        <img className='img' src={myImg} alt='my pic'/>
      </Profile>
    </div>
  );
}

export default App;
