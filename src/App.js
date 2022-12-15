import logo from './logo.svg';
import './App.css';
import ListBuilder from './components/listBuilder';
import NavBar from './components/nav';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      
     <NavBar/>
     <ListBuilder/>
     <Footer/>
     

    </div>
  );
}

export default App;
