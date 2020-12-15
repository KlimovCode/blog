import React from 'react'
import angel from '../assets/angel.png'

export const ContactPage = () => {
  return (
    <div>
      <div className="col-4">
        <img src={angel} class="rounded float-left img-thumbnail" alt="..." />
      </div>
      <div className="col-8 text-center">
        <p>Some text about myself.</p>
      </div>
    </div>
  )
}