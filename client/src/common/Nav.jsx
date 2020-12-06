import React from 'react'

export const Nav = () => {
  return (
    <div className="row">
      <div className="col-12">
        <header>
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="#">Оля эндокринолог</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Главная <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Обо мне</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Блог</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Контакты</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </div>
  )
}