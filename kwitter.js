function addUser(){
    username = document.getElementById("user_name").ariaValueMax;
    localStorage.setItem("user_name", username);
    window.location = "kwitter_room.html";
}

const firebaseConfig = {
    apiKey: "AIzaSyCgQEUv3jHEnX79QuDOzBWBoYvPdff_9iA",
    authDomain: "st-fairyschool.firebaseapp.com",
    projectId: "st-fairyschool",
    storageBucket: "st-fairyschool.appspot.com",
    messagingSenderId: "289392516800",
    appId: "1:289392516800:web:9d68f8e6a4c6b23d2d9725"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);