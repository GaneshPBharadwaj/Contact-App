import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, contactSelector } from '../reducer/contactReducer';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import styles from './home.module.css'; // Import the CSS module

const Home = () => {

    const contacts = useSelector(contactSelector);
    const dispatch = useDispatch();

    const deleteContact = (id) => {
        dispatch(actions.deleteContact(id));
        toast.success("Contact deleted successfully!");
    }

    return (
        <div className={styles.homeContainer}>
            <div className={styles.homeContent}>
                <div className={styles.homeTableContainer}>
                    <table className={styles.contactTable}>
                        <thead className={styles.tableHeader}>
                            <tr>
                                <th scope="col" className={styles.headerCell}>
                                    Sl.no
                                </th>
                                <th scope="col">Name</th>
                                <th scope="col" className={styles.headerCell}>Email</th>
                                <th scope="col">Number</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact, id) => (
                                <tr key={id}>
                                    <td className={`${styles.tableCell} ${styles.headerCell}`}>{id + 1}</td>
                                    <td className={styles.tableCell}>{contact.name}</td>
                                    <td className={`${styles.tableCell} ${styles.headerCell}`}>{contact.email}</td>
                                    <td className={styles.tableCell}>{contact.number}</td>
                                    <td className={styles.tableCell}>
                                        <Link to={`/edit/${contact.id}`} className={styles.actionButton}>
                                            <img src="https://cdn-icons-png.flaticon.com/32/143/143437.png" alt="Edit Contact"/>
                                        </Link>
                                        <button type="button" onClick={() => deleteContact(contact.id)} className={styles.actionButton}>
                                            <img src="https://cdn-icons-png.flaticon.com/32/6861/6861362.png" alt="Delete Contact"/>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;
