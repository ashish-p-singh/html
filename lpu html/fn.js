function divmodule(d1, d2) {
    return d1 / d2;
}
let div = divmodule(10, 2);
document.getElementById("divison").innerHTML = "Division is: " + div;
function calculate(w, h) {
    return w * h;
}
let area = calculate(5, 6);
document.getElementById("area").innerHTML = "Area is: " + area;
function message(name) {
    return "Hello," + name + " How are you?";
}
let greeting = message("Ashish");
document.getElementById("greet").innerHTML = greeting;
function showSquare(num) {
    let value = num * num;
    document.getElementById("square").innerHTML = "Square of " + num + " is: " + value;
}
showSquare(9);
function convertUpper() {
    let input = document.getElementById("textBox");
    input.value = input.value.toUpperCase();
}
function KeyDownHandler(event) {
    console.log("Key pressed: " + event.key);
}
function showAlert() {
    alert("You have clicked a button");
}
function mouseOver() {
    document.getElementById("hover").style.backgroundColor = "red";
}
function mouseOut() {
    document.getElementById("hover").style.backgroundColor = "yellow";
}
function nameChange(){
    document.getElementById("changeMsg").innerText="Updated Text😊";
}
function buttonClicked(){
    document.getElementById("clickMsg").innerText="Button Clicked😍";
}
function showMessage(event){
    event.preventDefault();
  let name= document.getElementById("username").value;
  document.getElementById("result").innerText="Hello, "+name;
}
function validateForm(){
    let fname=document.details.username.value;
    let lname=document.details.username.value;
    let email=document.details.email.value;
    if (fname ==  " "){
        alert("Please provide firstname,aas it is mandatory");
        return false;
    }
    if (lname ==  " "){
        alert("Please provide lastname,as it is mandatory");
        return false;}
    if (email == " "){
        alert("Please provide email, as it is mandatory");
        return false;
    }
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(pattern)){
        alert("Please enter a valid email address");
        return false;
    }
    let password=document.details.password.value;
    let confirmPassword=document.details.confirmPassword.value;
    if (password != confirmPassword){
        alert("Password and Confirm Password do not match");
        return false;
    }
    let pass="123456";
    if (password==pass){
        alert("Password is correct");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}