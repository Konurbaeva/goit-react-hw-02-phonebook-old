import {Component} from "react";
import { nanoid } from 'nanoid'
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";


export class App extends Component {
  state = {
    contacts: [],
   filter: ''
  }

  addContact= () => {
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number
    };

    if (!newContact.name|| !newContact.number){
    alert("Either name or number must be provided");
    return false;
    }

      if (this.state.contacts.find(contact => contact.name === this.state.name))
      return alert(`${this.state.name} is already in contacts`);
      if (this.state.contacts.find(contact => contact.number === this.state.number))
      return alert(`${this.state.number} is already in contacts`);
  
       this.setState(({ contacts }) => ({
       contacts: [...contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    console.log('Delete contactId: ' + contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleSearch = e => {
   let lowerCase = e.target.value.toLowerCase();
   this.setState({filter: lowerCase});
  }

  handleChange = e => {
    this.setState({ 
      [e.target.name]: e.currentTarget.value
    });
  };

render(){
  const { contacts, filter } = this.state;
  const borderStyle = {
    padding: '10px',
    border: '1px solid black',
    borderRadius:'5px',
    width:'320px'
};
// eslint-disable-next-line array-callback-return
const filteredContacts = contacts.filter(({name}) => {
  if(name){
    return name.toLowerCase().includes(filter.toLowerCase())
  }
})

  return (
    <div
      style={{
        height: '30vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101'
      }}
    >
<div style={borderStyle}>
     <ContactForm 
    name={contacts.name}
    number={contacts.number}
      addContact={this.addContact}/>
      </div>
      <div className="Contacts">Contacts</div>
      <Filter filter={filter} handleSearch={this.handleSearch}/>
    <ContactList contacts={filteredContacts} deleteContact={this.deleteContact}/>
    </div> 
  );
 }
};