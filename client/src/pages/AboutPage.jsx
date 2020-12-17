import React from 'react'
import slide1 from '../assets/slide-1.png'
import slide2 from '../assets/slide-2.png'
import slide3 from '../assets/slide-3.png'

export const AboutPage = () => {
  return (
    <div>
      <div className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Обо мне</h1>
          <p className="lead text-muted">
            Несколько слов о моем образовании и опыте.
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div id="carouselExampleIndicators" className="carousel slide col-10" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={slide1} alt="Первый слайд" />
              <div class="carousel-caption d-none d-md-block" style={{ color: '#321A57' }}>
                <h5>Диплом</h5>
                <p>О получении диплома</p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={slide2} alt="Второй слайд" />
              <div class="carousel-caption d-none d-md-block" style={{ color: '#321A57' }}>
                <h5>Сертификат</h5>
                <p>О получении диплома</p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={slide3} alt="Третий слайд" />
              <div class="carousel-caption d-none d-md-block" style={{ color: '#321A57' }}>
                <h5>Диплом</h5>
                <p>О получении диплома</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  )
}