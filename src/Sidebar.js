import { Avatar } from '@mui/material'
import React from 'react'
import "./sidebar.css"

function Sidebar() {
  const recentItem = (topic) => {
    return (
      <div className='sidebar_recentItem'>
        <span className='sidebar_hash'>#</span>
        <p>{topic}</p>
      </div>
    );
  }

  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
         <img src="https://www.color-hex.com/palettes/29010.png" alt='' />
         <Avatar className='sidebar_avatar' src='https://media.licdn.com/dms/image/v2/D5603AQH5V1VglOQrJw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1704737979566?e=1740614400&v=beta&t=prxf3VxHCUdOWKsIsibTSjKUnXEYIaMuYui7bk4vM3U'/>
         <h2>Shivam Singh</h2>
         <h4>shivam@gmail.com</h4>
      </div>
      <div className='sidebar_stats'>
        <div className='sidebar_stat'>
         <p>Who Viewed You</p>
         <p id='sidebar_statNumber'>2,543</p>
        </div>
        <div className='sidebar_stat'>
        <p>Views on post</p>
        <p id='sidebar_statNumber'>2,443</p>
        </div>
      </div>

      <div className='sidebar_bottom'>
         <p>Recents</p>
         {recentItem("reactJs")}
         {recentItem("devOps")}
         {recentItem("SoftwareEngneering")}
         {recentItem("Backend")}
         {recentItem("Nodejs")}
         {recentItem("Cloud Computing")}
      </div>

    </div>
  )
}

export default Sidebar
