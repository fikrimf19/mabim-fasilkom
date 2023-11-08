function Login() {
    var done = 0;
    var username = document.login.username.value;
    var password = document.login.password.value;
    if (username == "Admin" && password == "Admin"){
            if(confirm("Apakah anda login?") == true){
                window.location.href ="https://github.com/fikrimf19/mabim-fasilkom"
            } else {
                alert("Login dibatalkan !");
            }

    } else{
            if (done == 0) {
            alert("Username/Password Salah");
            }   
    }
}