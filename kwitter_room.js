
var firebaseConfig = {
      apiKey: "AIzaSyBO_rGAWwijLofOhkWyUiEXOVgCfZ4wnWM",
      authDomain: "kwitter-database-147d2.firebaseapp.com",
      databaseURL: "https://kwitter-database-147d2-default-rtdb.firebaseio.com",
      projectId: "kwitter-database-147d2",
      storageBucket: "kwitter-database-147d2.appspot.com",
      messagingSenderId: "850014905380",
      appId: "1:850014905380:web:c4026e4915a6babc3ca4b1",
      measurementId: "G-VP3GGKCZT1"
    };

firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room Name -"+Room_names);
        row = "<div class='room_name' id = "+ Room_names +" onclick = 'redirect_To_Room_Name(this.id)'>#"+Room_names+"</div> <hr> ";
        document.getElementById("output").innerHTML += row;
        //End code
      });});}
getData();

user_name = localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirect_To_Room_Name()
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

