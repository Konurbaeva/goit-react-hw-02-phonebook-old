import PropTypes from 'prop-types';
import styled from 'styled-components';


function ContactForm({ handleSubmit, name, handleChange, number, addContact }) {
    return (
        <form onSubmit={handleSubmit}>
            Name
            <input
                value={name}
                onChange={handleChange}
                placeholder="Enter name"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            Number
            <input
                value={number}
                onChange={handleChange}
                type="tel"
                name="number"
                placeholder="Enter phone number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <Button type="button" onClick={addContact}>Add contact</Button>
        </form>
    );
}

ContactForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    name: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    number: PropTypes.string,
    addContact: PropTypes.func.isRequired
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