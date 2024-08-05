var username = document.forms['form']['username'];
var password = document.forms['form']['password'];

var username_error = document.getElementById('username_error');
var pass_error = document.getElementById('pass_error');

username.addEventListener('textInput',username_verify);
password.addEventListener('textInput',pass_verify);


function validated(){
    if(username.value.length < 9){
        username.style.border = "2px solid red";
        username_error.style.display = "block";
        username.focus();
        return false;
    }
    if(password.value.length < 6){
        password.style.border = "2px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
}
function username_verify(){
    if (username.value.length >= 8){
        username.style.border = "2px solid black";
        username_error.style.display = "none";
        return true;
    }
}
function pass_verify(){
    if (password.value.length >= 5){
        password.style.border = "2px solid black";
        pass_error.style.display = "none";
        return true;
    }
}

