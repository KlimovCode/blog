import React from 'react'
import slide1 from '../assets/slide-1.png'
import slide2 from '../assets/slide-2.png'
import slide3 from '../assets/slide-3.png'

export const ContactPage = () => {
  return (
    <div>
      <div className="row">
        <div id="carouselExampleIndicators" class="carousel slide col-8" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={slide1} alt="Первый слайд" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={slide2} alt="Второй слайд" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={slide3} alt="Третий слайд" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  )
}