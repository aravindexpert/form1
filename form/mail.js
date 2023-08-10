const firebaseConfig = {
    apiKey: "AIzaSyDCvx9ge8Isa7jfDtHqr_r3q1OwnRIPmhs",
    authDomain: "hackathon-c8e8f.firebaseapp.com",
    databaseURL: "https://hackathon-c8e8f-default-rtdb.firebaseio.com",
    projectId: "hackathon-c8e8f",
    storageBucket: "hackathon-c8e8f.appspot.com",
    messagingSenderId: "301986760695",
    appId: "1:301986760695:web:71e14552b41d3aa1d110f2"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };