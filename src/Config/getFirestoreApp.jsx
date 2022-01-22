import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAxWBd1QPpLtcxatUkahdtwLX5x-ISNE6s",
    authDomain: "adastra-7026e.firebaseapp.com",
    projectId: "adastra-7026e",
    storageBucket: "adastra-7026e.appspot.com",
    messagingSenderId: "826106075333",
    appId: "1:826106075333:web:db6b680351609fe85738ac",
  };
  
  const app = initializeApp(firebaseConfig);

  export const getFirestoreApp = () => {
      return app
  }