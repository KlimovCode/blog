import React from 'react'
import angel from '../assets/angel.png'
import slide1 from '../assets/slide-1.png'
import slide2 from '../assets/slide-2.png'
import slide3 from '../assets/slide-3.png'

export const ContactPage = () => {
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <img src={angel} class="rounded float-left img-thumbnail" alt="..." />
        </div>
        <div className="col-8 text-center">
          <p>Some text about myself.</p>
          <ul class="list-group">
            <li class="list-group-item">Телефон - 8 *** *** ****</li>
            <li class="list-group-item">Email - olya@mail.ru</li>
          </ul>
        </div>
      </div>
    </div>
  )
}