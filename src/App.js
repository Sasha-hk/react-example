import React, {useState, useEffect} from 'react';
import PostList from './components/PostList';
import PostFilter from './components/PostFilter'
import PostForm from './components/PostForm'
import Modal from './components/UI/Modal/Modal'
import Button from './components/UI/Button/Button'
import Loading from './components/UI/Loading/Loading'
import './styles/App.css';
import PostService from './API/PostService'
import { usePosts } from './components/hooks/usePosts';
import { useFatching } from './components/hooks/useFatching';



function App() {
    const [posts, setPosts] = useState([])  

    const [fachingPost, isPostLoading, errorPost] = useFatching(async () => {
        const posts = await new PostService().getAll()
        setPosts(posts)
    })

    useEffect(() => {
        fachingPost()
        },
        []
    )  
    
    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const [modal, setModal] = useState(false)

    const createNewPost = (newPost) => {
        if (newPost.title && newPost.body) {
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
        
        {isPostLoading 
            ? <Loading/>
            : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="JavaScript" />
        }
    </div>
    );
}

export default App;