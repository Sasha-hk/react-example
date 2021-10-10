import React from 'react';
import Button from './UI/Button/Button.jsx'



const PostItem = (props) => {
  

    return (
        <div className="post">
            <div className="post__content">
                <h2>{props.post.title}</h2>
                <p>{props.post.content}</p>
            </div>

            <Button>Delete</Button>
        </div>
    )
}

export default PostItem;