import styles from './Hero.module.scss';
import Image from "next/image";

const Hero = props => {
    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <Image src="/images/site/mishka.jpg" alt="Author image" width={300} height={300} />
            </div>
            <h1>Salute, I'm Mishka</h1>
            <p>And this is a NextJS-driven blog about WebDev</p>
        </section>
    )
}

export default Hero;