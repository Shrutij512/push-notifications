# Firebase Push Notifications

This project is a React application implementing a push notification system.It utilizes Firebase Cloud Messaging (FCM) for sending push notifications.

Push notifications are messages or alerts sent by applications or websites to the user's device, even when the application or website is not actively in use.  These notifications appear on the user's screen, usually as a banner, alert, or badge, to inform them about updates, events, or other relevant information from the application or website.



# Getting Started

1. Clone the repository:

   ###  `git clone https://github.com/Shrutij512/push-notifications`
   
3. Install dependencies:

   ###  `npm install`

4. start the development server

    ###  `npm run start`

# Firebase Integration

This project integrates with Firebase for push notifications. Upon user consent, Firebase generates a unique token for each device, which is used to send notifications.

## Permission Request

Upon loading the app, the system will prompt the user for permission to send notifications using the browser's native notification API. If the user grants permission, the system proceeds to generate a token for the device.

## Token Generation

Upon user consent, Firebase generates a unique token for the device using Firebase Cloud Messaging (FCM). This token uniquely identifies the device and allows sending notifications to it.

## Sending Notifications

Notifications are sent using the Firebase Cloud Messaging API. The system utilizes the token obtained from Firebase to send notifications to users. Notifications are sent reliably, even when the user's mobile device is inactive or the Chrome browser is closed.


`Firebase Console > Cloud Messaging > Send Notification`

![firebase-notification](https://github.com/Shrutij512/push-notifications/assets/132148988/15a9472b-8ecc-4e38-917d-30441ed199b6)

`Receiving Notification`

![push-notification](https://github.com/Shrutij512/push-notifications/assets/132148988/87ab9cef-175d-485c-b835-f46f9e1efb72)


![firebase-react-app](https://github.com/Shrutij512/push-notifications/assets/132148988/b74ce208-b281-4d1c-872f-86fa42c2985c)


```
const firebaseConfig = {
  apiKey: "AIzaSyCoiuTWc6Y8TsYUd5JK3bFvhyiUTk-vJXw",
  authDomain: "fir-push-notifications-e89ad.firebaseapp.com",
  projectId: "fir-push-notifications-e89ad",
  storageBucket: "fir-push-notifications-e89ad.appspot.com",
  messagingSenderId: "25395518223",
  appId: "1:25395518223:web:04be238fdf9c41c5153c7a"
};

```
