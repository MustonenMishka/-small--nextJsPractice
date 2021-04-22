import styles from './PostItem.module.scss';
import Link from "next/link";
import Image from "next/image";

const PostItem = props => {
    const {title, image, excerpt, date, postSlug} = props.post;
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const imgPath = `/images/posts/${postSlug}/${image}`;
    const postPath = `/posts/${postSlug}`;

    return (
        <li className={styles.post}>
            <Link href={postPath}>
                <a href="">
                    <div className={styles.image}>
                        <Image src={imgPath} alt={title} width={300} height={200} layout="responsive"/>
                    </div>
                    <div className={styles.content}>
                        <h3>{title}</h3>
                        <time>{formattedDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default PostItem