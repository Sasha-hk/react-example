import React, {useState} from 'react';
import Button from './UI/Button/Button.jsx'
import Input from './UI/Input/Input.jsx'



const PostForm = ({create}) => {
    const [newPost, setNewPost] = useState({ title: '', content: ''})
 
    function addNewPost(e) {
        e.preventDefault() 
        create({...newPost, id: Date.now()})
        setNewPost({title: '', content: ''})
    }

    return (
        <form className="post__create">
            <Input 
                value={newPost.title}
                onChange={e => setNewPost({...newPost, title: e.target.value})}
                type="text" 
                placeholder="title"  
            />

            <Input 
                value={newPost.content}
                onChange={e => setNewPost({...newPost, content: e.target.value})}
                type="text" 
                placeholder="content" 
            />

            <Button onClick={addNewPost}>Create post</Button>
        </form>
    )
}

export default PostForm;