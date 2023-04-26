const email = "luizgustavo159753@gmail.com"

const indexArroba = email.indexOf("@");
const indexPonto = email.indexOf(".", indexArroba);
if(indexArroba > 0 && indexPonto > indexArroba){
    console.log("Email Valido");
}else{
    console.log("Email Invalido");
}

