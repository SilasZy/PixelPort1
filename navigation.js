document.addEventListener("DOMContentLoaded", function() {
    var entrarButton = document.getElementById("entrarButton");
    entrarButton.addEventListener("click", function() {
        var login = document.getElementById("loginInput").value;
        var senha = document.getElementById("senhaInput").value;
        
        if (login == "julioSouza@gmail.com" && senha== "444") { // Você pode adicionar validação aqui
            window.location.href = "navegation.html";
            alert("logado com sucesso");
        } else {
            alert("esqueceu sua senha?");
        }
    });
});



    

