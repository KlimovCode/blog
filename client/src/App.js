import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { useRoutes } from './routes'

import { Nav } from './common/Nav'
import { Footer } from './common/Footer'

function App() {
  const router = useRoutes()

  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Nav />
          {router}
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
