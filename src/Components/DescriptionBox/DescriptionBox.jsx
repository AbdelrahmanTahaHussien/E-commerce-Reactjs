import React from 'react'
import './DescriptionBox.css'



export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Static description text</p>
            <p>Different Static Description text</p>
        </div>
    </div>
  )
}
