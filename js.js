const pass_field = document.querySelector('.pass-key');
const showbtne = document.querySelector('show');
showbtne.addEventListener('click', function (){
    if (pass_field.type ==="password"){
        pass_field.type="text";
        showbtne.textContent="hide"
        showbtne.style.color="#3498db"

    }
    else{
        pass_field.type = "password";
        showbtne.textContent ="show";
        showbtne.style.color = "#222"

    }
});