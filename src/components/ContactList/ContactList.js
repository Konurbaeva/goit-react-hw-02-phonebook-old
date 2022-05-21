import PropTypes from 'prop-types';
import styled from 'styled-components';

function ContactList({ contacts, deleteContact }) {
    console.log('ContactList contacts: ', contacts);
    return (
        contacts.map(({ name, number, id }) => {
            return <ul key={id}>
                <li>{name} {number}</li>
                {/* <button type="button" onClick={() => deleteContact(id)}>Delete</button> */}
                <Button type="button" onClick={() => deleteContact(id)}>Delete</Button>
            </ul>
        })
    );
}


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
    deleteContact: PropTypes.func.isRequired,
};


const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 0.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


export default ContactList;