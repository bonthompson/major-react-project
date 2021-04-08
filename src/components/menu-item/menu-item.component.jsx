import React from 'react'
import './menu-item.styles.scss'

// functional component
const MenuItem = ({ title, imageUrl, size }) => (
  // same as passing props and doing props.title
  <div className={`${size} menu-item`}>
    <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <h2 className='subtitle'>SHOP NOW</h2>
    </div>
  </div>
)

export default MenuItem
