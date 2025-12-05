import { adminDB } from "../firebase/admin";

export async function getEvents() {
    try {
        const snapshot = await adminDB.collection('Events').get();
        const allEvents = snapshot.docs.map(doc => ({ id: doc.id, 
            ...doc.data(),
            from: doc.data().from ? doc.data().from.toDate().toLocaleDateString("en-GB", {  
                year: "numeric",
                month: "long",
                day: "numeric"}) : null,
            to: doc.data().to ? doc.data().to.toDate().toLocaleDateString("en-GB", {  
                year: "numeric",
                month: "long",
                day: "numeric"}) : null,
        }));
        return allEvents;
    }
    catch(error) {
        console.error('Error fetching events!', error);
        throw error;    
    }
}
