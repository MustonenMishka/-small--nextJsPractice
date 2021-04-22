import styles from './FeaturedPosts.module.scss';
import PostGrid from "../posts/PostGrid";

const FeaturedPosts = props => {
    return (
        <section className={styles.latest}>
            <h2>Featured Posts</h2>
            <PostGrid posts={props.posts}/>
        </section>
    )
}

export default FeaturedPosts;