import firebase from 'firebase/app'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
    apiKey: "AIzaSyB_LER3FqD2HYY_O4a85GlIY1HhHaljDcg",
    authDomain: "tenanthub-ec679.firebaseapp.com",
    projectId: "tenanthub-ec679",
    storageBucket: "tenanthub-ec679.appspot.com",
    messagingSenderId: "286112970607",
    appId: "1:286112970607:web:bcb3511ab51f23dcd05a9a",
    measurementId: "G-T7XY242Y11"

}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()

// collection references
const demoRequestsCollection = db.collection('demoRequests')
const messagesCollection = db.collection('messages')
const subscriptionsCollection = db.collection('subscriptions')

// export utils/refs
export {
  db,
  demoRequestsCollection,
  messagesCollection,
  subscriptionsCollection
}
