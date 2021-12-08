function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room name- "+ Room_names);
     row = "<div class= 'room_name' id =" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div> </hr>";
     document.getElementById("output").innerHTML +=row ;
//End code
});});}
getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_room.html";
}

function redirectToRoomName(){
    console.log(name)
      localStorage.setItem("room_name", name);
      window.location = "kwitter_room.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
const firebaseConfig = {
    apiKey: "AIzaSyCgQEUv3jHEnX79QuDOzBWBoYvPdff_9iA",
    authDomain: "st-fairyschool.firebaseapp.com",
    databaseURL: "https://st-fairyschool-default-rtdb.firebaseio.com",
    projectId: "st-fairyschool",
    storageBucket: "st-fairyschool.appspot.com",
    messagingSenderId: "289392516800",
    appId: "1:289392516800:web:9d68f8e6a4c6b23d2d9725"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  user_name = setItem("user_name", name);
  room_name = setItem("room_name", name);

  function send()
  {
      firebase.database().ref(room_name).push({
     name:user_name,
     message:msg,
     like:0
      });
  }