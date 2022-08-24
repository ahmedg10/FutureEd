import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import './index.css';
import App from './Components/App.js';
import data from './data/data.json';
import { BrowserRouter } from 'react-router-dom';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjYSUgRsyXV7itRtQZeRxomFQvMnui4yQ",
  authDomain: "futureed-f5bfa.firebaseapp.com",
  projectId: "futureed-f5bfa",
  storageBucket: "futureed-f5bfa.appspot.com",
  messagingSenderId: "868705361853",
  appId: "1:868705361853:web:c003ca23dc65811aa03cd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App props={data} />
    </BrowserRouter>
  </React.StrictMode>
);