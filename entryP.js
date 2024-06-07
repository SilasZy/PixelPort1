
document.addEventListener("DOMContentLoaded", function() {
    var entrarPerfil = document.querySelector(".perfil");
    entrarPerfil.addEventListener('click', function(event) {
        event.preventDefault(); // 
        alert('Seja bem vindo!!');
        window.location.href = "perfil.html"; 
    });
});
