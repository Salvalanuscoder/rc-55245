import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header'

function App() {
  console.log('App component rendered');

  return (

    <div>
          <Header />
          <ItemListContainer />
          
      <div>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome back to React!</h1>
      <div className="card">
        <button onClick>
          Get stated!
        </button>
        <p>
          Learn more in <code>https://react.com.ar</code>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the React logo to learn more
      </p>
    </div>
  )
}

export default App
