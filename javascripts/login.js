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
    }).then(function(data) {
        
        if(resp.detail){
            localStorage.setItem("token", data.access);        
            redirectToGeoportal(); 
        }else{
            alert("contraseña o usuarios no válidos")
        }
        
    }).catch(function(error){
        alert(error)
        document.getElementById("loading-spinner").classList.add("hidden");
        console.log(error)
    })
    
    
    
}


window.submitLoginForm = submitLoginForm;
