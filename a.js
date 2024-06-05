document.addEventListener("DOMContentLoaded", function() {
    var entrarButton = document.getElementById("entrarButton");
    entrarButton.addEventListener("click", function() {
        var login = document.getElementById("loginInput").value;
        var senha = document.getElementById("senhaInput").value;
        
        if (login === "silasGabriel@gmail.com" && senha === "12345") {
            alert("Logado com sucesso!");
            window.location.href = "Pixelport.html";
        } else {
            alert("Email ou senha incorretos. Por favor, tente novamente.");
        }
    });
}); 