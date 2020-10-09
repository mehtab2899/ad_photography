// toggle button
toggleAside = () => {
  document.getElementById("asideBar").classList.toggle("active");
  document.getElementById("button").classList.toggle("active1");
};

// ----------------------------------------------------------------------------------------

// loader

const loader = document.querySelector(".loader");
const container = document.getElementById("container");

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    container.style.opacity = 1;
    container.style.display = "block";
  }, 4000);
}

init();
// ----------------------------------------------------------------------------------------

// Waypoints

$(document).ready(function () {
  $(".anime1").waypoint(
    function (direction) {
      $(".anime1").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  $(".anime-delay3").waypoint(
    function (direction) {
      $(".anime-delay3").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  $(".anime-delay4").waypoint(
    function (direction) {
      $(".anime-delay4").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  $(".anime-delay5").waypoint(
    function (direction) {
      $(".anime-delay5").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  $(".anime-delay6").waypoint(
    function (direction) {
      $(".anime-delay6").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  $(".anime-delay7").waypoint(
    function (direction) {
      $(".anime-delay7").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  $(".anime-delay8").waypoint(
    function (direction) {
      $(".anime-delay8").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  $(".anime-delay9").waypoint(
    function (direction) {
      $(".anime-delay9").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  $(".anime-delay10").waypoint(
    function (direction) {
      $(".anime-delay10").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  $(".anime-delay11").waypoint(
    function (direction) {
      $(".anime-delay11").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  $(".anime-delay12").waypoint(
    function (direction) {
      $(".anime-delay12").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  $(".anime-delay13").waypoint(
    function (direction) {
      $(".anime-delay13").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  $(".anime-delay14").waypoint(
    function (direction) {
      $(".anime-delay14").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  $(".gal-anime").waypoint(
    function (direction) {
      $(".gal-anime").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );
});

// ----------------------------------------------------------------------------------------

// contact form

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBUugXMFEd7mFpmf1RVM63NeZQ56NdWRok",
  authDomain: "form-552b6.firebaseapp.com",
  databaseURL: "https://form-552b6.firebaseio.com",
  projectId: "form-552b6",
  storageBucket: "form-552b6.appspot.com",
  messagingSenderId: "760509407196",
  appId: "1:760509407196:web:ff281cd0c3b90fd898b919",
  measurementId: "G-6T0H3N3H8B",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal("name");
  var email = getInputVal("email");
  var message = getInputVal("message");

  // Save message
  saveMessage(name, email, message);

  // alert

  document.querySelector(".alert").style.display = "block";

  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 2000);

  // Clear form
  document.getElementById("contactForm").reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message,
  });
}
