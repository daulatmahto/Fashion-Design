
let menu = document.querySelector(".fa-bars");
let navbarlinks = document.querySelector(".navbar .container .nav-box .menu-top .nav-menu");

menu.onclick = function (){
    menu.classList.toggle("fa-xmark");
    navbarlinks.classList.toggle("active")
}



function validate(){
    // First Name Validation

    var username = document.getElementById("username").value;

    if(username == ""){
        document.getElementById("error-1").innerHTML = "****Empty fields are not allowed";
        return false;
    }

    if(username.length < 3){
        document.getElementById("error-1").innerHTML = "****Min 3 Characters ";
        return false;
    }

    if(username.length > 10){
        document.getElementById("error-1").innerHTML = "**** Max 10 Characters";
        return false;
    }

    if(password.search(/[a-z]/)<0){
        document.getElementById("error-1").innerHTML = "****Must one lowercase letters";
        return false;
    }

    if(password.search(/[A-Z]/)<0){
        document.getElementById("error-1").innerHTML = "****Must one Uppercase letters";
        return false;
    }

    // Email Validation

    var email = document.getElementById("email").value;

    if(email == ""){
        document.getElementById("error-2").innerHTML = "****Empty fields are not allowed";
        return false;
    }

    if(email.length < 10){
        document.getElementById("error-2").innerHTML = "****Min 10 Characters ";
        return false;
    }

    if(email.length > 30){
        document.getElementById("error-2").innerHTML = "**** Max 30 Characters";
        return false;
    }

    // Contact Validation

    var contact = document.getElementById("contact").value;

    if(contact == ""){
        document.getElementById("error-4").innerHTML = "****Empty fields are not allowed";
        return false;
    }

    if(contact.length < 10 || contact.length > 10){
        document.getElementById("error-4").innerHTML = "****Min 10 Characters";
        return false;
    }

    // Password Validation

    var password = document.getElementById("password").value;

    if(password == ""){
        document.getElementById("error-3").innerHTML = "****Empty fields are not allowed";
        return false;
    }

    if(password.length < 8){
        document.getElementById("error-3").innerHTML = "****Min 8 Characters";
        return false;
    }

    if(password.length > 15){
        document.getElementById("error-3").innerHTML = "****Max 15 Characters";
        return false;
    }

    if(password.search(/[a-z]/)<0){
        document.getElementById("error-3").innerHTML = "****Must one lowercase letters";
        return false;
    }

    if(password.search(/[A-Z]/)<0){
        document.getElementById("error-3").innerHTML = "****Must one Uppercase letters";
        return false;
    }

    if(password.search(/[0-9]/)<0){
        document.getElementById("error-3").innerHTML = "****Must one number";
        return false;
    }

    if(password.search(/[_@&$!#%^*]/)<0){
        document.getElementById("error-3").innerHTML = "****Must one special character";
        return false;
    }

}





function makeTimer() {

    var endTime = new Date("1 Jan 2027 ::");			
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        jQuery("#h").html(hours + "<span>h</span>");
        jQuery("#m").html(minutes + "<span>m</span>");
        jQuery("#s").html(seconds + "<span>s</span>");		

}

setInterval(function() { makeTimer(); }, 1000);
