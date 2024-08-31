import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import AddContact from './AddContact';
import EditContact from './EditContact';
import Home from './Home';
import { actions } from '../reducer/contactReducer';
import { useDispatch } from 'react-redux';
// import { ToastContainer } from "react-toastify";
import {Toaster} from 'react-hot-toast';

const ContactList = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        const data = [];
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users/");
                const json = await response.json();
                json.forEach((contact) => {
                data.push({
                    id: contact.id,
                    name: contact.name,
                    number: contact.phone,
                    email: contact.email,
                });
                });
                dispatch(actions.fetchContact(data));
            } catch (error) {
                console.error("Error fetching contacts:", error);
            }
        };
        fetchData();
    }, [dispatch])


  return (
    <div>
      
      <BrowserRouter>
        {/* <ToastContainer /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddContact />}></Route>
          <Route path="/edit/:id" element={<EditContact />}></Route>{" "}
        </Routes>
        <Toaster/>
      </BrowserRouter>
    </div>
  )
}

export default ContactList;
