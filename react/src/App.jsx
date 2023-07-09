import {Header} from './components/Header/Header';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import reactIcon from './assets/react.svg';


function App() {
  

  return (

    <div>
          <Header />
          <ItemListContainer saludo={"Welcome to react!"}/>

          <img src={reactIcon} alt="react Icon" />
    </div>
  )
}

export default App
