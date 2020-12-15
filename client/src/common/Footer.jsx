import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className="pt-4 my-md-5 pt-md-5 border-top fixed-bottom">
      <div className="row">
        <div className="col-12 col-md">
          Оля эндокринолог
        </div>
        <div className="col-6 col-md">
          <h5>Категории</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a href="" className="text-muted">Диабет</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // <nav className="navbar fixed-bottom navbar-light bg-light">
    //   <div className="container">
    //     <a className="navbar-brand" href="#">Оля эндокринолог</a>
    //   </div>
    // </nav>
  )
}