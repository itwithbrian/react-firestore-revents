// import storage from '../config/firebase';
import db from '../config/firebase';
import { onSnapshot, collection } from 'firebase/firestore';

export function getEventFromFirestore(observer) {
  return onSnapshot(collection(db, 'events'), observer);
}
// // const db = storage.firestore();

// export function getEventFromFirestore(observer) {
//   return storage.collection('events').onSnapshot(observer);
// }
