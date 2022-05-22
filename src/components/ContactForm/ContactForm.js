import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Component } from 'react';
import { nanoid } from 'nanoid'


class ContactForm extends Component {

    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.currentTarget.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const contact = {
            id: nanoid(),
            ...this.state,
        }
        this.props.onSubmit(contact);
        //  this.resetForm();

        this.setState({ name: '', number: '' });
    };

    resetForm = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Name
                <Input
                    onChange={this.handleChange}
                    placeholder="Enter name"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={this.state.name}
                />
                Number
                <Input
                    onChange={this.handleChange}
                    type="tel"
                    name="number"
                    placeholder="Enter phone number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={this.state.number}
                />
                <Button type='submit'>Add contact</Button>
            </form>
        );
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
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