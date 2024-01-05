import React from 'react'
import { useState, useEffect } from 'react';

function SelectedContact({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const data = await response.json();
        setContact(data); 
        console.log("Contact:", data);

      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchContact();
  }, []);
   
  return (
    <>
    <div className="peopleInfo">
        <h2>Selected Contact</h2>
        <p>Contact Id: {selectedContactId}</p>

        {contact && (
          <>
            <p>Name: {contact.name}</p>
            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
            <p>Company: {contact.company.bs}, {contact.company.name}</p>
            <p>Address: {contact.address.street}, {contact.address.suite}, {contact.address.city}, {contact.address.zipcode}</p>
            <p>Website: {contact.website}</p>
            <p>User Name: {contact.username}</p>
          </>
        )}

        <button className="backButton" onClick={() => setSelectedContactId(null)}>Back to List</button>
    </div>
    </>
  )
}

export default SelectedContact;