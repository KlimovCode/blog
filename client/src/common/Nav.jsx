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
  )
}