const male = document.getElementById("male");
const female = document.getElementById("female");
const other = document.getElementById("others");
const submit = document.getElementById("enter");
const login = document.getElementById("login");
const username = document.getElementById("username");
const userpass = document.getElementById("userpass");

submit.onclick = function(){

    if(male.checked){
        console.log("You're a Male");
    }
    else if(female.checked){
        console.log("You're a Female");
    }
    else if(other.checked){
        console.log("LGBT");
    }
    else{
        `You Must select a gender`;
    }
}

login.onclick = function(){
    if (userpass.value != "" && username.valule != "" ){
        alert(`Welcome ${username.value}`);
    }
    else{
        alert(`Enter Username And Password`);
    }
}

