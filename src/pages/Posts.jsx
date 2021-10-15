import React, {useState, useEffect} from 'react';
import PostList from '../components/PostList';
import PostFilter from '../components/PostFilter'
import PostForm from '../components/PostForm'
import Modal from '../components/UI/Modal/Modal'
import Button from '../components/UI/Button/Button'
import Loading from '../components/UI/Loading/Loading'
import '../styles/App.css';
import PostService from '../API/PostService'
import { usePosts } from '../components/hooks/usePosts';
import { useFatching } from '../components/hooks/useFatching';



function Posts() {
    const [posts, setPosts] = useState([]) 
    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const [fachingPost, isPostLoading, errorPost] = useFatching(async () => {
        const posts = await new PostService().getAll(limit, page)
        setPosts(posts.data)
        const totalCount = posts.headers['x-total-count'];
    })

    console.log(totalPages)

    useEffect(() => {
        fachingPost()
        },
        []
    )  
    

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
        { errorPost && <h1>An error occurred</h1> }
        {isPostLoading 
            ? <Loading/>
            : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="JavaScript" />
        }
    </div>
    );
}

export default Posts;
