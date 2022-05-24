// import storage from '../config/firebase';
import db from '../config/firebase';
import { onSnapshot, collection, Timestamp } from 'firebase/firestore';

export function dataFromSnapshot(snapshot) {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();

  for (const prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (data[prop] instanceof Timestamp) {
        data[prop] = data[prop].toDate();
      }
    }
  }

  return {
    ...data,
    id: snapshot.id,
  };
}
export function getEventFromFirestore(observer) {
  return onSnapshot(collection(db, 'events'), observer);
}
// // const db = storage.firestore();

// export function getEventFromFirestore(observer) {
//   return storage.collection('events').onSnapshot(observer);
// }
