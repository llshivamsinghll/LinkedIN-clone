import React from 'react';
import { Avatar } from '@mui/material';
import './post.css';

function Post() {
    return (
        <div className='post'>
            <div className='header'>
                <Avatar />
                <div className='info'>
                    <h3>Shivam Singh</h3>
                    <p>Student At Jaypee University Of Engineering And Technology</p>
                </div>
            </div>
            <div className='post_body'>
                <p>Message Goes Here</p>
            </div>
        </div>
    );
}

export default Post;
