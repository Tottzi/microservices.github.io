import React from 'react';
import PostCreate from './PostCreate'
import Postlist from './Post.list'

export default () => {
    return (
        <div className="container">
            <h1>Create Post</h1>
            <PostCreate/>
            <hr/>
            <h1>Posts</h1>
            <Postlist/>
        </div>
    )
}