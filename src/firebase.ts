import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

// Replace this firebaseConfig object with the congurations for the project you created on your firebase console. 
const firebaseConfig = {
    apiKey: "AIzaSyDtq6h2l4nyOwO_6Sm0z4iH6Vl8MNB6-Qk",
    authDomain: "test-notification-fb738.firebaseapp.com",
    projectId: "test-notification-fb738",
    storageBucket: "test-notification-fb738.appspot.com",
    messagingSenderId: "462947711601",
    appId: "1:462947711601:web:1c60652dabea5fc222f9d0",
    measurementId: "G-CBN5H7JTTC"
  };

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
return getToken(messaging, { vapidKey: 'BOx5YQTobQvW3q3Gl6oducko5I2EuOqg3oteiv-zWUgGkQu1eP2wM7g3Q9-cjX6_UcTYfrdzM0eAzq_x-qSPkLg' })
    .then((currentToken) => {
    if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Perform any other neccessary action with the token
    } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
    }
    })
    .catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    });
};

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
        console.log("payload", payload)
        resolve(payload);
    });
});