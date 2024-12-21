
import React from 'react';
import './App.css';  
import './Header.css';
import HeaderOptions from './HeaderOptions';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
      <div className='header_left'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="" />
        <div className='header_search'>
          
          <SearchIcon/>
          <input type="TEXT" />
        </div>
      </div>
      <div className='header_right'>
          <HeaderOptions Icon={HomeIcon} title="Home"/>
          <HeaderOptions Icon={SupervisorAccountIcon} title="My Network"/>
          <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
          <HeaderOptions Icon={ChatIcon} title="Messaging"/>
          <HeaderOptions Icon={NotificationsIcon} title="Notifications"/>
          <HeaderOptions avatar="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" title="me"/>
      </div>

    </div>
  );
}

export default Header;