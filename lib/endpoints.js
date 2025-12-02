import { adminDB } from "../firebase/admin";

export async function getEvents() {
    try {
        const snapshot = await adminDB.collection('Events').get();
        const allEvents = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return allEvents;
    }
    catch(error) {
        console.error('Error fetching events!', error);
        throw error;    
    }
}