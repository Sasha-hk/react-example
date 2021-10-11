import React from 'react';
import Button from './UI/Button/Button.jsx'



const PostItem = ({post, deletePost, remove}) => {
    return (
        <div className="post">
            <div className="post__content">
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </div>

            <Button onClick={() => remove(post.id)}>Delete</Button>
        </div>
    )
}

export default PostItem;