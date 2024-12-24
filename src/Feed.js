import { Avatar } from '@mui/material';
import React from 'react';
import ImageIcon from '@mui/icons-material/Image';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import InputOptions from './inputOptions';
import Post from './post'; // Fixed import: Use uppercase 'Post' for React component
import './Feed.css';

function Feed() {
  return (
    <div className="feed">
      {/* Input Section */}
      <div className="post_input">
        <div className="create">
          {/* Avatar and Input Field */}
          <Avatar src="https://media.licdn.com/dms/image/v2/D5603AQH5V1VglOQrJw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1704737979566?e=1740614400&v=beta&t=prxf3VxHCUdOWKsIsibTSjKUnXEYIaMuYui7bk4vM3U" />
          <input placeholder="Start a post" />
        </div>

        {/* Media Options */}
        <div className="media">
          <InputOptions Icon={ImageIcon} title="Photo" Color="blue" />
          <InputOptions Icon={CalendarMonthIcon} title="Event" Color="green" />
          <InputOptions Icon={DescriptionIcon} title="Write Article" Color="orange" />
        </div>
      </div>

      {/* Post Section */}
      <div className="posts">
        <Post />
        {/* <Post />
        <Post /> */}
      </div>
    </div>
  );
}

export default Feed;
