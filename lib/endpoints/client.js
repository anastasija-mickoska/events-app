import { db } from "../firebase/client";
import { doc, getDoc, addDoc, collection, setDoc } from "firebase/firestore";

export const getEventById = async (eventId) => {
  const ref = doc(db, "Events", eventId);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  const event = {
    id: snap.id,
    ...snap.data(),
    from: snap.data().from
      ? snap.data().from.toDate().toLocaleDateString("en-GB", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : null,
    to: snap.data().to
      ? snap.data().to.toDate().toLocaleDateString("en-GB", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : null,
  };

  return event;
};

export const addEvent = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, "Events"), formData);
    return { success: true, id: docRef.id, event: formData };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addEventToFavourites = async (userId, favouritesArray) => {
  try {
    const ref = doc(db, "Users", userId);
    await setDoc(ref, { favourites: favouritesArray }, { merge: true });
    return { success: true, id: userId, favourites: favouritesArray };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addEventToInterested = async (userId, interestedArray) => {
  try {
    const ref = doc(db, "Users", userId);
    await setDoc(ref, { interested: interestedArray }, { merge: true });
    return { success: true, id: userId, interested: interestedArray };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const changeFavouritesCount = async (eventId, favouritesCount) => {
  try {
    const ref = doc(db, "Events", eventId);
    await setDoc(ref, { favouritesCount: favouritesCount }, { merge: true });
    return { success: true, id: eventId, favouritesCount: favouritesCount };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const changeInterestedCount = async (eventId, interestedCount) => {
  try {
    const ref = doc(db, "Events", eventId);
    await setDoc(ref, { interestedCount: interestedCount }, { merge: true });
    return { success: true, id: eventId, interestedCount: interestedCount };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUserFavourites = async(userId) => {
  try {
    const ref = doc(db, "Users", userId);
    const snap = await getDoc(ref);
    if (!snap.exists()) return null;
    const userData = snap.data();
    const favouritesIds = userData.favourites || [];
    const favouriteEvents = await Promise.all(
      favouritesIds.map(id => getEventById(id))
    );
    return favouriteEvents;   
  }
  catch (error) {
    console.error(error);
    throw error;
  }
};