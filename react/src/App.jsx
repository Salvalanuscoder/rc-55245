import {Header} from './components/Header/Header';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  

  return (

    <div>
          <Header />
          <ItemListContainer saludo={"Welcome to react!"}/>
    </div>
  )
}

export default App
