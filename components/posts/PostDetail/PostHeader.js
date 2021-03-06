import Image from "next/image";

import styles from './PostHeader.module.scss';

const PostHeader = props => {
    return (
        <header className={styles.header}>
            <h1>{props.title}</h1>
            <Image src={props.image} alt={props.title} width={200} height={150} />
        </header>
    )
}

export default PostHeader