import React, {useState} from 'react';
import {useRef} from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm.jsx'
import './styles/App.css';



function App() {
    const [posts, setPosts] = useState(
        [
            {id: 1, title: 'HS triks', content: "the tricks is really cumplaxity so..." },
            {id: 2, title: 'JS triks', content: "the tricks is really cumplaxity so..." },
            {id: 3, title: 'C++ triks', content: "the tricks is really cumplaxity so..." },
        ]
    ) 

    const createNewPost = (newPost) => {
        setPosts([...posts, newPost ])
    }
    
    const removePost = (postID) => {
        setPosts(posts.filter(p => p.id !== postID))
    }

    return (
    <div className="App">

        <PostForm create={createNewPost} />
        
        <PostList remove={removePost} posts={posts} title="JavaScript" />

    </div>
    );
}

export default App;