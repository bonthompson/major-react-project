import React from 'react'
import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom'

// functional component
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  // same as passing props and doing props.title
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <h2 className='subtitle'>SHOP NOW</h2>
    </div>
  </div>
)

export default withRouter(MenuItem)
