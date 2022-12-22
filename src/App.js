import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav/nav';
import Footer from './components/footer/footer';
import ShopBody from './components/shop-body/shop-body';
import RouteSwitch from "./RouteSwitch";
import Diamond from './components/shapes/diamond';
import Images from './components/HomeImages/Images'
function App() {
  return (
    <div className="App">
            <a href="http://localhost:3000/store"><button>Store</button></a>
     <Images/>
    </div>
  );
}

export default App;
