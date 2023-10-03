function redirectToGeoportal() {
    window.location.href = "geoportal_v0.1.html"; 
}

function submitLoginForm() {
    document.getElementById("loading-spinner").classList.remove("hidden");
    fetch("http://10.90.0.42:8008/api/token/", {
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
        }
        
    })
}


window.submitLoginForm = submitLoginForm;
