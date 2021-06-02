const fields = document.querySelectorAll("[required]")

//console.log(fields)

function validar_form_user () {
    var nome = formuser.nome.value;
    var email = formuser.email.value;

    if(nome == "") {
        alert ("Preencha o campo nome");
        formuser.nome.focus ();
        return false;
    }

    if(email == "" || email.indexOf ("@") == -1 ) {
        alert ("Preencha o campo E-mail");
        formuser.nome.focus ();
        return false;
    }
}

