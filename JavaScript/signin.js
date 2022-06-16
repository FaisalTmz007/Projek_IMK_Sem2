var objUser = [
    {
        email: "user@gmail.com",
        pass: "user123"
    },
    {
        email: "company@gmail.com",
        pass: "company123"
    }
]

function getInfo() {
    var email = document.getElementById("email").value
    var pass = document.getElementById("pass").value

    
        if(email == "user@gmail.com" && pass == "user123") {
            window.location.href="../HTML/home.html"
            return
        }
        else if(email == "company@gmail.com" && pass == "company123") {
            window.location.href="../HTML/homepage-company.html"
            return
        }
    
    alert("incorrect username or password")
}