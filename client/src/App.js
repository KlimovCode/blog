import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { useRoutes } from './routes'

import { Nav } from './common/Nav'

function App() {
  const router = useRoutes()

  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Nav />
          {router}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
