function redirectToGeoportal() {
    window.location.href = "geoportal_v0.1.html"; 
}

function submitLoginForm() {
    fetch("http://10.90.0.42:8008/api/token/", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username: document.getElementById("usuario").value, password: document.getElementById("contrasena").value}),
    }).then(function(resp) {
        return resp.json();
    }).then(function(data) {
        // Guardar el token en localStorage
        
        localStorage.setItem("token", data.access);
        
        redirectToGeoportal(); 
    });
    
    
    
}


window.submitLoginForm = submitLoginForm;
