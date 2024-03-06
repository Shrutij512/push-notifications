import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyCoiuTWc6Y8TsYUd5JK3bFvhyiUTk-vJXw",
    authDomain: "fir-push-notifications-e89ad.firebaseapp.com",
    projectId: "fir-push-notifications-e89ad",
    storageBucket: "fir-push-notifications-e89ad.appspot.com",
    messagingSenderId: "25395518223",
    appId: "1:25395518223:web:04be238fdf9c41c5153c7a"
};


const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async() => {
    const permission = await Notification.requestPermission();
    console.log(permission)

    if (permission === "granted") {
        const token = await getToken(messaging, { vapididKey: "BHbnezChpeFQyBILugg3CW5sI8Id8Uh1tB0WtoOUqBKx4ZjEOxSxBTcvBwzXz-4NZs70Ec2KFOWELVv6BpTCxBs" })
        console.log(token)
    }

}