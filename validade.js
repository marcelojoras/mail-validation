var mail = 'marcelojoras@hotmail.com';

if(validateEmail(mail)){
	if (/@google.com\s*$/.test(mail)) {
	   console.log("Servidor do google, pode passar");
	}else if (/@outlook.com\s*$/.test(mail)) {
	   console.log("Servidor do outlook, pode passar");
	}else if (/@hotmail.com\s*$/.test(mail)) {
	   console.log("Servidor do hotmail, pode passar");
	}
}

function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}