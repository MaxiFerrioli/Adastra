import './App.css';
import ItemListContainer from './components/ItemListContainer';
import { Navbar } from './components/NavBar';

function App() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
        <ItemListContainer/>
      </main>
      
    </div>
  );
}

export default App;
