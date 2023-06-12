/* eslint-disable no-undef */
// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: `AIzaSyDtq6h2l4nyOwO_6Sm0z4iH6Vl8MNB6-Qk`,
  authDomain: `test-notification-fb738.firebaseapp.com`,
  projectId: `test-notification-fb738`,
  storageBucket: `test-notification-fb738.appspot.com`,
  messagingSenderId: `462947711601`,
  appId: `1:462947711601:web:1c60652dabea5fc222f9d0`,
  measurementId: `G-CBN5H7JTTC`,
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});