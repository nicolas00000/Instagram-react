import Navbar from './components/Navbar';
import Storyes from './components/Storyes';
import Post from './components/Post'
import Slidebar from './components/Slidebar'
import FundoMobile from './components/FundoMobile'
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

            <Post/>

          </div>
          
          <Slidebar/>

          <FundoMobile/>
        </div>
      </div>
    </div>
  );
}

export default App;
