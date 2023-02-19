import Navbar from './components/Navbar';
import Storyes from './components/Storyes';
import Post from './components/Post'
import Slidebar from './components/Slidebar'
import './App.css';
import './style.css'

function App() {
  return (
    <div className="App">
      <div class="root">
        <Navbar/>

        <div class="corpo">
          <div class="esquerda">
            <Storyes/>    
 
klklklkkl
            <Post/>

          </div>
          
          <Slidebar/>
        </div>
      </div>
    </div>
  );
}

export default App;
