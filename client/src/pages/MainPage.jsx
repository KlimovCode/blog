import React from 'react'

export const MainPage = () => {
  return (
    <div>
      <div className="row vertical-gap">

        <div className="col-4">
          <h3>Категории</h3>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="#">Сахарный диабет</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Тиреоидология</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Диабетология</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Аденома щитовидной железы</a>
            </li>
          </ul>
        </div>

        <div className="col-8">
          <div className="card">
            <div className="card-header">
              Сахарный диабет
          </div>
            <div className="card-body">
              <h5 className="card-title">Сахарный диабет 1 тип</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-outline-primary btn-sm">Читать дальше</a>
              <hr />
              <h5 className="card-title">Сахарный диабет 2 тип</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-outline-primary btn-sm">Читать дальше</a>
            </div>
          </div>
        </div>

      </div>



    </div>
  )
}