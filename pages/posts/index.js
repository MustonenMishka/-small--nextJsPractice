import AllPosts from "../../components/posts/AllPosts";
import {getAllPosts} from "../../utils/post-util";
import Head from "next/head";

// const DUMMY_POSTS = [
//     {
//         postSlug: 'getting-started-with-nextjs',
//         title: 'Getting Started with NextJS',
//         image: 'getting-started-nextjs.png',
//         excerpt: 'Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.',
//         date: '2022-02-14'
//     },
//     {
//         postSlug: 'getting-started-with-nextjs2',
//         title: 'Getting Started with NextJS',
//         image: 'getting-started-nextjs.png',
//         excerpt: 'Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.',
//         date: '2022-02-14'
//     },
//     {
//         postSlug: 'getting-started-with-nextjs3',
//         title: 'Getting Started with NextJS',
//         image: 'getting-started-nextjs.png',
//         excerpt: 'Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.',
//         date: '2022-02-14'
//     },
//     {
//         postSlug: 'getting-started-with-nextjs4',
//         title: 'Getting Started with NextJS',
//         image: 'getting-started-nextjs.png',
//         excerpt: 'Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.',
//         date: '2022-02-14'
//     }
// ];

const AllPostsPage = props => {
    return (
        <>
            <Head>
                <title>All Posts</title>
                <meta name="description" content="Here is a list of all posts"/>
            </Head>
            <AllPosts posts={props.posts}/>
        </>
    )
}

export default AllPostsPage;

export function getStaticProps() {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts
        },
        revalidate: 1800
    }
}