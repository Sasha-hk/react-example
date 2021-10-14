import React, {useState, useMemo} from 'react';
import PostList from './components/PostList';
import PostFilter from './components/PostFilter'
import PostForm from './components/PostForm'
import Modal from './components/UI/Modal/Modal'
import Button from './components/UI/Button/Button'
import './styles/App.css';

import { usePosts } from './components/hooks/usePosts';



function App() {
    const [posts, setPosts] = useState(
        [
            {id: 1, title: 'HS triks', content: "1" },
            {id: 2, title: 'JS triks', content: "2" },
            {id: 3, title: 'C++ triks', content: "3" },
        ]
    ) 

    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const [modal, setModal] = useState(false)

    const createNewPost = (newPost) => {
        if (newPost.title && newPost.content) {
            setPosts([...posts, newPost ])
            setModal(false)
        }
    }
    
    const removePost = (postID) => {
        setPosts(posts.filter(p => p.id !== postID))
    }

    return (
    <div className="App">

        <Button onClick={e => setModal(true)} >
            Create post
        </Button>

        <Modal visible={modal} setVisible={setModal}>
            <h1>Create post</h1>
            <PostForm create={createNewPost} />
        </Modal>
        
        <PostFilter filter={filter} setFilter={setFilter} />
        
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="JavaScript" />
        
    </div>
    );
}

export default App;