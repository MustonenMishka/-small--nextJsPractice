import styles from './PostGrid.module.scss'
import PostItem from "./PostItem";

const PostGrid = props => {


return (
    <ul className={styles.grid}>
        {props.posts.map(post => <PostItem key={post.postSlug} post={post} />)}
    </ul>
)
}

export default PostGrid;