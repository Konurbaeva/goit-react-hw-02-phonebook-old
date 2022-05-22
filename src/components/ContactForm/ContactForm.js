import PropTypes from 'prop-types';
import { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid'

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    addContact = () => {
        const newContact = {
            id: nanoid(),
            name: this.state.name,
            number: this.state.number
        };

        console.log('newContact: ' + JSON.stringify(newContact))

        console.log('newContact.name: ' + JSON.stringify(newContact.name))

        if (!newContact.name || !newContact.number) {
            alert("Either name or number must be provided");
            return false;
        }

        if (this.props.contacts.find(contact => contact.name === this.state.name))
            return alert(`${this.state.name} is already in contacts`);
        if (this.props.contacts.find(contact => contact.number === this.state.number))
            return alert(`${this.state.number} is already in contacts`);

        // this.setState(({ contacts }) => ({
        //     contacts: [...contacts, newContact],
        // }));
        this.setState(({ contacts }) => ({
            contacts: [...contacts, newContact],
        }));
    };


    handleSubmit = e => {
        e.preventDefault();
        this.state.onSubmit(this.state);

        this.resetForm();
    };

    resetForm = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Name
                <Input

                    onChange={this.props.handleChange}
                    placeholder="Enter name"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                Number
                <Input

                    onChange={this.props.handleChange}
                    type="tel"
                    name="number"
                    placeholder="Enter phone number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                {/* <Button type="button" onClick={this.props.addContact}>Add contact</Button> */}
                <Button type="button" onClick={this.addContact}>Add contact</Button>
            </form>
        );
    }
}

ContactForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    //  addContact: PropTypes.func.isRequired
};


const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: pink;
  border: none;
  border-radius: 3px;
`;


const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


export default ContactForm;