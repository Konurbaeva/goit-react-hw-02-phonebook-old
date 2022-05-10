import {Component} from 'react';

class ContactForm extends Component {
      render() {
          
          return (<>
          <label>Name</label>
          <input
          placeholder='Please type your name'
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
<button type="submit">Add contact</button>
          </>)
      }
}

export default ContactForm;