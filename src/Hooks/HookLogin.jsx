import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const urlLogin = "http://localhost:3000/api/user/auth"

export const HookLogin = ( ) => {
//me confundi todo al intentar hacerlo yo mismo con tantos cambios, asi que lo escribi en español, siguiendo sus pasos en los videos. 
//Inicio, Iniciar, inici... omg... 

    const [inicioSesion, setInicioSesion] = useState(false);

    const [dataUser, setDataUser] = useState({
        username : "",
        first_name: "",
        email: ""
    });

    const iniciarSesion  = async (username, user_password)=>{

        const dataIniciarSesion = {
            username,
            user_password
        };

        try {
            const response = await axios.post(urlLogin, dataIniciarSesion);
            const data = (await response).data;
            console.log(data);
            
        }catch(error){
            if(axios.isAxiosError(error)){

                const {response} = error;
                const {data} = response;
                console.log(data);
            } else {
                console.log("Unexpected Error")
            }
        }
        

    
    }

  return {
    inicioSesion,
    iniciarSesion

  }
}

