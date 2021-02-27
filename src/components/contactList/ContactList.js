import React from 'react';
import css from './ContactList.css';

const ContactList = ({contacts, contactsLocal}) =>{
  console.log(contacts);
  console.log(localStorage)
  return(
    <>
    <ul>
      <h2>Contact List</h2>
      {contacts.map((elem)=> {
        return(
          <li key={elem.id} id="contact">
            <h3>{elem.name}</h3>
            <p>{elem.number}</p>
          </li>
        )
      })}
      {
        contactsLocal.map((elem) =>{
          return(
            <li id="contact">
              <h3>{elem.name}</h3>
              <p>{elem.number}</p>
            </li>
          )
        })
      }
    </ul>
    </>
  )
}

export default ContactList;