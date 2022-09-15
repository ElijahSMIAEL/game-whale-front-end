import styles from './AllPosts.module.css'
import PostCard from '../../components/PostCard/PostCard'

const AllPosts = () => {
  return (
    <div className="container">
    <h1>AllPostsComponent</h1>
    <PostCard /> 
    </div>
  )
}

export default AllPosts