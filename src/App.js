import React, {useState, useMemo} from 'react';
import PostList from './components/PostList';
import PostFilter from './components/PostFilter'
import PostForm from './components/PostForm'
import Modal from './components/UI/Modal/Modal'
import Button from './components/UI/Button/Button'
import './styles/App.css';



function App() {
    const [posts, setPosts] = useState(
        [
            {id: 1, title: 'HS triks', content: "1" },
            {id: 2, title: 'JS triks', content: "2" },
            {id: 3, title: 'C++ triks', content: "3" },
        ]
    ) 

    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [posts, filter.sort]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const [modal, setModal] = useState(false)

    const createNewPost = (newPost) => {
        console.log(newPost)

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