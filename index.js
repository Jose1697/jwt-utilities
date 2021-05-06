const jwt = require('jsonwebtoken')

const [ , ,option, secret, nameOrtoken] = process.argv; //los argumentos lo vamos a sacar del terminal, 
//los 2 primeros parametros q no se definen son el proceso de node y el archivo que estamos leyendo
//option = verificar o firmar

if( !option || !secret || !nameOrtoken){
    return console.log('Missing arguments'); //No estan los argumentos
}

function signToken(payload, secret){ //Firmar JWT
    return jwt.sign(payload, secret);
}

function verifyToken(token, secret) { //Verificar JWT
    return jwt.verify(token,secret) //retorna el token decodificado
}

if(option === 'sign'){
    console.log(signToken({ sub: nameOrtoken }, secret));
}else if(option === 'verify'){
    console.log(verifyToken(nameOrtoken, secret));
} else {
    console.log('Option needs to be "sign" or "verify" ');
}