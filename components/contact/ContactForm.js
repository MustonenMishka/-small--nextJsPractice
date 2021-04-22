import styles from './ContactForm.module.scss';
import axios from "axios";
import {useState, useEffect} from  'react';
import Notification from "../ui/Notification";

const ContactForm = props => {
    const [emailInput, setEmailInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [messageInput, setMessageInput] = useState('');

    const [requestStatus, setRequestStatus] = useState(null); // pending/success/error
    const [requestError, setRequestError] = useState(null);

    useEffect(() => {
        if (requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestStatus(null);
                setRequestError(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [requestStatus])

    const sendMessageHandler = async e => {
        e.preventDefault();

        setRequestStatus('pending');
        try {
            await axios.post('/api/contact', {
                email: emailInput,
                name: nameInput,
                message: messageInput
            });
            setRequestStatus('success');
            setEmailInput('');
            setNameInput('');
            setMessageInput('');
        } catch (err) {
            setRequestStatus('error');
            setRequestError(err.response.data.message);
        }
    }

    let notification;
    if (requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending message...',
            message: 'Your message is on its way'
        }
    } else if (requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Success!',
            message: 'Your message send successfully'
        }
    } else if (requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Error!',
            message: requestError || 'Something went wrong'
        }
    }


    return (
        <section className={styles.contact}>
            <h1>Looking for partnership?</h1>
            <form className={styles.form} onSubmit={sendMessageHandler}>
                <div className={styles.controls}>
                    <div className={styles.control}>
                        <label htmlFor="email">Your Email</label>
                        <input onChange={e => {setEmailInput(e.target.value)}}
                            value={emailInput} type="email" id="email" required/>
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="name">Your Name</label>
                        <input onChange={e => {setNameInput(e.target.value)}}
                            value={nameInput} type="text" id="name" required/>
                    </div>
                </div>
                <div className={styles.control}>
                    <label htmlFor="message">Your Message</label>
                    <textarea onChange={e => {setMessageInput(e.target.value)}}
                        value={messageInput} rows='5' id="message" required></textarea>
                </div>

                <div className={styles.actions}>
                    <button>Send Message</button>
                </div>
            </form>
            {notification && <Notification notification={notification} />}
        </section>
    )

}

export default ContactForm