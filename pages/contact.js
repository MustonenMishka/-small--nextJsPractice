import ContactForm from "../components/contact/ContactForm";
import Head from "next/head";

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>Contact me</title>
                <meta name="description" content="Contact form for api routes testing"/>
            </Head>
            <ContactForm/>
        </>
    )
}

export default ContactPage;