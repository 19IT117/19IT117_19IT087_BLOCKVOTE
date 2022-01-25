/*
		Designed by: SELECTO
		Original image: https://dribbble.com/shots/5311359-Diprella-Login
*/
// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyAO_v3_VUqPyl1Alic_Tv_qlq2jcDAMnF0",
    authDomain: "marksheet-verification-19it126.firebaseapp.com",
    databaseURL: "https://marksheet-verification-19it126-default-rtdb.firebaseio.com",
    projectId: "marksheet-verification-19it126",
    storageBucket: "marksheet-verification-19it126.appspot.com",
    messagingSenderId: "525038746361",
    appId: "1:525038746361:web:98e251049a7f01a409c028"
    };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    // Initialize variables
    const auth = firebase.auth()
    const database = firebase.database()
    
    // Set up our register function
    function register () {
      // Get all our input fields
      email = document.getElementById('email').value
      password = document.getElementById('password').value
      username = document.getElementById('username').value
    
      // Validate input fields
      if(validate_field(email)==false || validate_field(password)==false || validate_field(username)==false){
        alert("One or more fields seem to be empty!!")
        return
      }

      if (validate_email(email) == false || validate_password(password) == false) {
        return
        // Don't continue running the code
      }
     
      // Move on with Auth
      auth.createUserWithEmailAndPassword(email, password)
      .then(function() {

        // Declare user variable
        var user = auth.currentUser
    
        // Add this user to Firebase Database
        var database_ref = database.ref()
    
        // Create User data
        var user_data = {
          email : email,
          username : username,
          last_login : Date.now()
        }
    
        // Push to Firebase Database
        database_ref.child('users/' + user.uid).set(user_data)
    
        // Done
        alert('Sign-Up Successfull!!')
      })
      .catch(function(error) {
        // Firebase will use this to alert of its errors
        var error_code = error.code
        var error_message = error.message
    
        alert(error_message)
      })
    }
    
    // Set up our login function
    function login () {
      // Get all our input fields
      email = document.getElementById('email2').value
      password = document.getElementById('password2').value
    
      // Validate input fields
      if(validate_field(email)==false || validate_field(password)==false){
        alert("One or more fields seem to be empty!!")
        return
      }

      if (validate_email(email) == false) {
        return
        // Don't continue running the code
      }
    
      auth.signInWithEmailAndPassword(email, password)
      .then(function() {
        // Declare user variable
        var user = auth.currentUser
    
        // Add this user to Firebase Database
        var database_ref = database.ref()
    
        // Create User data
        var user_data = {
          last_login : Date.now()
        }
    
        // Push to Firebase Database
        database_ref.child('users/' + user.uid).update(user_data)
    
        // Done
        alert('Log-in Successfull!')
    
      })
      .catch(function(error) {
        // Firebase will use this to alert of its errors
        var error_code = error.code
        var error_message = error.message
    
        alert(error_message)
      })
    }
  
    
    // Validate Functions
    function validate_email(email) {
      expression = /^[^@]+@\w+(\.\w+)+\w$/
      if (expression.test(email) == true) {
        // Email is good
        return true
      } else {
        alert("Please enter a valid email-id!!")
        // Email is not good
        return false
      }
    }
    
    function validate_password(password) 
    { 
      var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
      if(password.match(decimal)) 
      { 
        return true;
      }
      else
      { 
        alert('Password must be between 8 to 20 characters containing at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.')
        return false;
      }
    } 
    
    function validate_field(field) {
      if (field == null) {
        return false
      }
    
      if (field.length <= 0) {
        return false
      } else {
        return true
      }
    }

function forgotPassword(){
  email = document.getElementById('email3').value
  firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    alert("Password reset link has been sent to your e-mail!")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    alert(errorMessage)
  });
}



let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault()

let changeForm = (e) => {

    switchCtn.classList.add("is-gx");
    setTimeout(function(){
        switchCtn.classList.remove("is-gx");
    }, 1500)

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
}

let mainF = (e) => {
    for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons );
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm)
}

window.addEventListener("load", mainF);