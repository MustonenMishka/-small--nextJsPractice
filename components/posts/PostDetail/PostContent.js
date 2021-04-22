import ReactMarkdown from "react-markdown";
import Image from "next/image";
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import darcula from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

import styles from './PostContent.module.scss';
import PostHeader from "./PostHeader";

const PostContent = props => {
    const imgPath = `/images/posts/${props.post.postSlug}/${props.post.image}`;

    const customRenderers = { // this code helps markdown understand nextjs Image component
        p(paragraph) {
            const {node} = paragraph;
            if (node.children[0].tagName === 'img') {
                const image = node.children[0];
                return (
                    <div className={styles.image}>
                        <Image
                            src={`/images/posts/${props.post.postSlug}/${image.properties.src}`}
                            alt={image.alt}
                            width={600}
                            height={300}
                        />
                    </div>
                );
            }
            return <p>{paragraph.children}</p>;
        },
        code(code) {
            const {className, children} = code;
            const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
            return <SyntaxHighlighter style={darcula} language={language} children={children} />
        }
    }

    return (
        <article className={styles.content}>
            <PostHeader title={props.post.title} image={imgPath}/>
            <ReactMarkdown components={customRenderers}>{props.post.content}</ReactMarkdown>
        </article>
    )
}

export default PostContent