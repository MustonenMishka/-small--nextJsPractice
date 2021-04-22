import fs from 'fs';
import path from 'path';
import matter from "gray-matter";

const postsPath = path.join(process.cwd(), 'content', 'posts');

export function getPostsFiles() {
    return fs.readdirSync(postsPath);
}

export function getPostData(postIdentifier) {
    const postSlug = postIdentifier.replace(/\.md$/, ''); //removing file extension
    const filePath = path.join(postsPath, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const {data, content} = matter(fileContent);

    const postData = {postSlug, ...data, content};
    return postData
}

export function getAllPosts() {
    const postFiles = getPostsFiles();
    const allPosts = postFiles.map(postFile => getPostData(postFile));
    return allPosts.sort((prev, next) => prev > next ? -1 : 1);
}

export function getFeaturedPosts() {
    return getAllPosts().filter(post => post.isFeatured)
}