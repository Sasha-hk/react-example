import React, {useState} from 'react';
import {useRef} from 'react';
import PostList from './components/PostList';
import './styles/App.css';
import Button from './components/UI/Button/Button.jsx'
import Input from './components/UI/Input/Input.jsx'


function App() {
    const [posts, setPosts] = useState(
        [
            {id: 1, title: 'HS triks', content: "the tricks is really cumplaxity so..." },
            {id: 2, title: 'JS triks', content: "the tricks is really cumplaxity so..." },
            {id: 3, title: 'C++ triks', content: "the tricks is really cumplaxity so..." },
        ]
    ) 

    const [newPost, setNewPost] = useState(
        {   
            id: 0,
            title: '', 
            content: ''
        }
    )


    function addNewPost(e) {
        e.preventDefault() 

        setPosts([...posts, {...newPost, id: posts[posts.length - 1].id + 1}])
        setNewPost({title: '', content: ''})
        
    }

    return (
    <div className="App">

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
        
        <PostList posts={posts} title="JavaScript" />

    </div>
    );
}

export default App;