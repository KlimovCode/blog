import React from 'react'
import { MainPage } from './pages/MainPage'
import { Nav } from './common/Nav'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav />
        <MainPage />
      </div>
    </div>
  );
}

export default App;
