import { useEffect, useState } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [selectedContacts, setSelectedContactId] = useState(null);
    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(
                    `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const results = await response.json();
                setSelectedContactId(results);
                console.log('results: ', results)
            } catch (error) {
                console.error(error)
            }
        }
        fetchContact();
    }, [selectedContactId]);
} 

