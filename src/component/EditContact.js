import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { actions, contactSelector } from '../reducer/contactReducer';
import styles from './editContact.module.css'; // Import the CSS module

const EditContact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const { id } = useParams();
  const contacts = useSelector(contactSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentContact = contacts.find((contact) => contact.id === parseInt(id));

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find((contact) => contact.id !== parseInt(id) && contact.email === email);
    const checkNumber = contacts.find((contact) => contact.id !== parseInt(id) && contact.number === parseInt(number));

    if (!email || !number || !name) {
      return toast.warning("Please fill all fields!");
    }

    if (checkEmail) {
      return toast.error("This email already exists!");
    }

    if (checkNumber) {
      return toast.error("This number already exists!");
    }

    const data = { id: parseInt(id), name, email, number };
    dispatch(actions.updateContact(data));
    toast.success("Contact updated successfully!");
    navigate("/");
  };

  return (
    <div className={styles.container}>
      {currentContact ? (
        <>
          <h1 className={styles.title}>Edit Contact</h1>
          <div className={styles.formWrapper}>
            <div className={styles.formContainer}>
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
                <div className={styles.formActions}>
                  <input 
                    type="submit" 
                    value="Update Contact" 
                    className={styles.submitButton} 
                  />
                  <Link to="/" className={styles.cancelButton}>
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className={styles.errorTitle}>Contact with id {id} does not exist!</h1>
      )}
    </div>
  );
};

export default EditContact;
