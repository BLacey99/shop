import logo from './logo.svg';
import './App.css';
import ListBuilder from './components/listBuilder/listBuilder';
import Lists from './components/listCont/listContainer';
import NavBar from './components/nav/nav';
import Footer from './components/footer/footer';
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
