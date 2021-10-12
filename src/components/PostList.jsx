import React from "react";
import PostItem from './PostItem';



const PostList = ({posts, title, remove}) => {
    return (
        <div className="post__list">
            <h1 style={{margin: '10px 0 10px 0'}}>{title}</h1>

            {
                posts.length !== 0 
                ? posts.map(post => <PostItem remove={remove} post={post} key={post.id} />)
                : <h1 style={{textAlign: 'center'}}>Posts not found</h1>
            }
        </div>
    )
}

export default PostList;