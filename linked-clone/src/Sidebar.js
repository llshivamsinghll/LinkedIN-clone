import { Avatar } from '@mui/material'
import React from 'react'
import "./sidebar.css"
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
         <img src="https://www.color-hex.com/palettes/29010.png" alt='' />
         <Avatar />
         <h2>Shivam Singh</h2>
         <h4>shivam@gmail.com</h4>
         
      </div>
      <div className='sidebar_stats'>
        <div className='sidebar_stat'>
         <p>Who Viewed You</p>
         <p className='sidebar_statNumber'>2,543</p>
        </div>
        <div className='sidebar_stat'>
        <p>Views on post</p>
        <p className='sidebar_statNumber'>2,443</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
