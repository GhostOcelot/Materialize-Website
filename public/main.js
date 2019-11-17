//assigning DOM elements to variables
const messageForm = document.querySelector("#message-form");
const signupForm = document.querySelector("#signup-form");
const loginForm = document.querySelector("#login-form");
const loginButton = document.querySelectorAll(".login");
const logoutButton = document.querySelectorAll(".logout");
const signupButton = document.querySelectorAll(".signup");
const userNameBig = document.querySelector(".user-name-bigscreen");
const userNameSmall = document.querySelector(".user-name-smallscreen");
const articlesList = document.querySelector("#articles-list");

//user state change listener
auth.onAuthStateChanged(user => {
  if (user) {
    //get articles from firestore and display in DOM
    db.collection("Articles").get()
      .then(docs => {
        docs.forEach(doc => {
          articlesList.style.display = "block";
          articlesList.innerHTML += `
        <li>
        <div class="collapsible-header">${doc.data().title}</div>
        <div class="collapsible-body">${doc.data().content}
          </p>
          <div class="divider"></div>
          <p> <a href="#header" class="teal-text link">GO TO TOP</a></p>
        </div>
      </li>
        `
        })
      });
    articlesList.nextElementSibling.style.display = "none";
    console.log(user.email, "is logged in");
    loginButton.forEach(item => item.style.display = "none");
    signupButton.forEach(item => item.style.display = "none");
    logoutButton.forEach(item => item.style.display = "block");
    userNameBig.innerHTML = `${user.email}`;
    userNameBig.style.display = "block";
    userNameSmall.innerHTML = `${user.email}`;
    userNameSmall.style.display = "block";
    document.querySelector(".nav-list").style.display = "block";
  }
  else {
    articlesList.innerHTML = null;
    articlesList.style.display = "none";
    articlesList.nextElementSibling.style.display = "block";
    console.log("no user is currently logged in");
    loginButton.forEach(item => item.style.display = "block");
    signupButton.forEach(item => item.style.display = "block");
    logoutButton.forEach(item => item.style.display = "none");
    userNameBig.innerHTML = null;
    userNameBig.style.display = "none";
    userNameSmall.innerHTML = null;
    userNameSmall.style.display = "none";
    document.querySelector(".nav-list").style.display = "block";
  }
})

//Create new user
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;
  auth.createUserWithEmailAndPassword(email, password)
    .then((credential) => {
      console.log(credential.user.email, "has created an account")
      signupForm.reset();
      const signupModal = document.querySelector("#signup-modal");
      M.Modal.getInstance(signupModal).close()
    })
    .catch((error) => document.querySelector("#signup-error").innerHTML = error.message.toUpperCase());
})

//login
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      loginForm.reset();
      const loginModal = document.querySelector("#login-modal");
      M.Modal.getInstance(loginModal).close();
    })
    .catch((error) => document.querySelector("#login-error").innerHTML = error.message.toUpperCase());
})

//logout
document.querySelectorAll(".logout").forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    auth.signOut()
      .then(() => console.log("user logged out"))
  })
})

//sending message
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  messageForm.reset()
})

//Initializing materialize
M.AutoInit();

//closing articles when scrolling to page top
articlesList.addEventListener("click", (e) => {
  if (e.target.classList.contains("link")) { e.target.parentElement.parentElement.style.display = "none" }
})