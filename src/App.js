import React, { Component } from "react";
import "./App.css";

import Form from "./components/form/Form.js";
import ContactList from "./components/contactList/ContactList.js";
import SearchBar from "./components/searchBar/SearchBar.js";
import { render } from "@testing-library/react";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    contactsLocal: []
  };
  getLocalStorageItems(){
    window.onload = function(){
      for(let key in localStorage){
        const named_person = key + localStorage[key];
        this.setState({contactsLocal: named_person})
        console.log(this.state.contactsLocal)
      }
    }
  }
  addContact = (contact) => {
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
    console.log(this.state.contacts);
  };

  render() {
    return (
      <>
        <Form addContact={this.addContact} />
        <ContactList contacts={this.state.contacts} contactsLocal={this.state.contactsLocal}/>
        <SearchBar data={this.state.contacts} />
      </>
    );
  }
}
export default App;
