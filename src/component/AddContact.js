import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actions, contactSelector } from '../reducer/contactReducer';
import styles from './addContact.module.css';
import toast from 'react-hot-toast';

const AddContact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const contacts = useSelector(contactSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkData = contacts.find(
            (contact) => (contact.email === email && email) || (contact.number === parseInt(number) && number)
        );

        if (!email || !number || !name) {
            return toast.warning("Please fill all fields!");
        }

        if (checkData) {
            return toast.error("This email or number already exists!");
        }

        const data = { id: contacts[contacts.length - 1].id + 1, name, email, number };
        dispatch(actions.addContact(data));
        toast.success("Contact added successfully!");
        navigate("/");
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Add Contact</h1>
            <div className={styles.formWrapper}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <input 
                            type="text" 
                            placeholder="Name" 
                            className={styles.input} 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className={styles.input} 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input 
                            type="number" 
                            placeholder="Phone Number" 
                            className={styles.input} 
                            value={number} 
                            onChange={(e) => setNumber(e.target.value)} 
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input 
                            type="submit" 
                            value="Add Contact" 
                            className={styles.submitButton} 
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddContact;
