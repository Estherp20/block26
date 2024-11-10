import { useEffect, useState } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [selectedContact, setSelectedContact] = useState(null);

    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(
                    `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const results = await response.json();
                setSelectedContact(results);
                console.log('results: ', results)
            } catch (error) {
                console.error(error)
            }
        }
        fetchContact();
    }, [selectedContactId]);


    return(
        <div>
          {selectedContact && (
            <div>
              <h2>{selectedContact.name}</h2>
              <p>{selectedContact.email}</p>
              <p>{selectedContact.address.street}</p>
              <p>{selectedContact.address.city}, {selectedContact.address.zipCode}</p>
              <button onClick={() => setSelectedContactId(null)}>Back to Contacts</button>
            </div>
          )}
        </div>
    )} 

