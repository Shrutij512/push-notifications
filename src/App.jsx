// import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { generateToken, messaging } from './notifications/firebase.js';
import { onMessage } from "firebase/messaging"
import toast, { Toaster } from 'react-hot-toast';

function App() {

  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      console.log(payload);
      toast(payload.notification.body);
    })
  }, [])

  // const notify = () => toast('Here is your toast.');

  return (
    <div className="App">
      <Toaster />
      <img src="data:image/png;base64,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" alt="" id='notify-img' />
    </div>
  );
}

export default App;
