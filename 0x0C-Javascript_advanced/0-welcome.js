// 0 - Lexical Scoping

function welcome(firstName, lastName) {
  var fullName = firstName + " " + lastName;
  function displayFullName() {
    alert("Welcome " + fullName + "!")
  }
  displayFullName();
}
