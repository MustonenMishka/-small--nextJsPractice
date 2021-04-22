import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/FeaturedPosts";
import {getFeaturedPosts} from "../utils/post-util";
import Head from "next/head";

const Homepage = (props) => {
    return (
        <>
            <Head>
                <title>Welcome to Mishka's blog</title>
                <meta name="description" content="This is a dummy project to play with NextJs features"/>
            </Head>
            <Hero/>
            <FeaturedPosts posts={props.posts}/>
        </>
    )
}

export default Homepage;

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();
    return {
        props: {
            posts: featuredPosts
        },
        revalidate: 1800
    }
}