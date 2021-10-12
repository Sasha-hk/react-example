import React, {useState} from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm.jsx'
import Select from './components/UI/Select/Select.jsx'
import './styles/App.css';



function App() {
    const [posts, setPosts] = useState(
        [
            {id: 1, title: 'HS triks', content: "1" },
            {id: 2, title: 'JS triks', content: "2" },
            {id: 3, title: 'C++ triks', content: "3" },
        ]
    ) 

    const [selectdSord, setSelectdSord] = useState('')

    const createNewPost = (newPost) => {
        setPosts([...posts, newPost ])
    }
    
    const removePost = (postID) => {
        setPosts(posts.filter(p => p.id !== postID))
    }

    const sortPosts = (sortBy) => {
        setSelectdSord(sortBy)
        setPosts([...posts].sort((a, b) => a[sortBy].localeCompare(b[sortBy])))
    }

    return (
    <div className="App">

        <PostForm create={createNewPost} />
        
        <Select 
            options={[{value: 'title', name: 'by name'}, {value: 'content', name: 'by body'}]} 
            defaultValue="None" 
            value={selectdSord}
            onChange={sortPosts}    
        />
        
        <PostList remove={removePost} posts={posts} title="JavaScript" />
        
    </div>
    );
}

export default App;