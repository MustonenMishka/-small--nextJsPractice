import PostContent from "../../components/posts/PostDetail/PostContent";
import {getPostData, getPostsFiles} from "../../utils/post-util";
import Head from "next/head";

const PostDetailPage = props => {
    return (
        <>
            <Head>
                <title>{props.post.title}</title>
                <meta name="description" content={props.post.excerpt}/>
            </Head>
            <PostContent post={props.post}/>
        </>
    )
}

export default PostDetailPage;

export function getStaticProps(context) {
    const post = getPostData(context.params.postSlug);
    return {
        props: {
            post
        },
        revalidate: 1800
    }
}

export function getStaticPaths() {
    const postFileNames = getPostsFiles();
    const postSlugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''));

    return {
        paths: postSlugs.map(postSlug => ({params: {postSlug}})),
        fallback: false
    }
}