import React from 'react'

export const OnlinePage = () => {
  return (
    <div>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Онлайн консультация</h1>
        <p className="lead">
          Лучший способ изменить свое здоровье к лучшему - это узнать о нем больше.
        </p>
      </div>
      <div className="container">
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Одна консультация</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                500 рублей <small className="text-muted">/ 1 час</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Ознакомление с историей болезни</li>
                <li>Беседа с вами</li>
                <li>Выдача рекомендаций</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-outline-primary">Записаться</button>
            </div>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Комплекс консультаций</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                900 рублей <small className="text-muted">/ 2 часа</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Платите один раз за несколько консультаций</li>
                <li>Два часа разбиваем на две-три-четыре сеанса связи</li>
                <li>Выдача рекомендаций по итогу каждой консультации</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-outline-primary">Записаться</button>
            </div>
          </div>
        </div>
        <div className="card-deck mb-3 text-center">

        </div>
      </div>
    </div>
  )
}