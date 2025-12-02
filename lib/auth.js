import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export async function registerUser(email, password) {
  return await createUserWithEmailAndPassword(auth, email, password);
}
export async function loginUser(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}
export async function logoutUser() {
  return await signOut(auth);
}
export function subscribeToAuthChanges(callback) {
  return onAuthStateChanged(auth, callback);
}
