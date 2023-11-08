function redirectToGeoportal() {
    window.location.href = "geoportal_v0.1.html"; 
}
function handleEnterKey(event) {
    if (event.key === "Enter") {
        submitLoginForm();
    }
}
url="https://covid19.c3.unam.mx/chagas/api/token/"

function submitLoginForm() {
    document.getElementById("loading-spinner").classList.remove("hidden");
    fetch(url, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username: document.getElementById("usuario").value, password: document.getElementById("contrasena").value}),
    }).then(function(resp) {
        return resp.json();
    }).then(function(resp) {
        
        
        if(resp.access){
            localStorage.setItem("token", resp.access);        
            redirectToGeoportal(); 
        }else{
            alert("contraseña o usuarios no válidos")
            document.getElementById("loading-spinner").classList.add("hidden")
        }
        
    })
}


window.submitLoginForm = submitLoginForm;
