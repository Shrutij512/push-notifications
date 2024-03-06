importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyCoiuTWc6Y8TsYUd5JK3bFvhyiUTk-vJXw",
    authDomain: "fir-push-notifications-e89ad.firebaseapp.com",
    projectId: "fir-push-notifications-e89ad",
    storageBucket: "fir-push-notifications-e89ad.appspot.com",
    messagingSenderId: "25395518223",
    appId: "1:25395518223:web:04be238fdf9c41c5153c7a"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});