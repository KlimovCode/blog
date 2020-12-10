import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (

    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">Оля эндокринолог</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <NavLink to="/" className="p-2 text-dark">Главная</NavLink>
        <NavLink to="/" className="p-2 text-dark">Обо мне</NavLink>
        <NavLink to="/" className="p-2 text-dark">Блог</NavLink>
        <NavLink to="/" className="p-2 text-dark">Контакты</NavLink>
        <NavLink to="/online" className="">Онлайн консультация</NavLink>
      </nav>
    </div>

    // <div className="row">
    //   <div className="col-12">
    //     <header>
    //       <nav className="navbar navbar-expand-sm navbar-light bg-light">
    //         <NavLink className="navbar-brand" to="/">Оля эндокринолог</NavLink>
    //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    //           aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //           <span className="navbar-toggler-icon"></span>
    //         </button>

    //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //           <ul className="navbar-nav mr-auto">
    //             <li className="nav-item active">
    //               <NavLink className="nav-link" to="/">Главная <span className="sr-only">(current)</span></NavLink>
    //             </li>
    //             <li className="nav-item">
    //               <a className="nav-link" href="#">Обо мне</a>
    //             </li>
    //             <li className="nav-item">
    //               <NavLink className="nav-link" to="/">Блог</NavLink>
    //             </li>
    //             <li className="nav-item">
    //               <a className="nav-link" href="#">Контакты</a>
    //             </li>
    //           </ul>
    //         </div>
    //         <NavLink to="/online">Онлайн консультация</NavLink>
    //       </nav>
    //       <div>

    //       </div>
    //     </header>
    //   </div>
    // </div>
  )
}