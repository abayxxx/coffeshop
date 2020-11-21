import React from 'react'
import hero from '../assets/img/hero3.jpg'

export default function ImageHome() {
    return (

        <div className="image-container">
            <img src={hero} className="image" alt="img" />
        </div>

    )
}
