import React from 'react'
import { useState } from 'react'
import { HookLogin } from '../Hooks/HookLogin'


export const LoginFormHook = () => {

  const {inicioSesion, iniciarSesion} = HookLogin();

  const [dataForm, setDataForm] = useState({
        username : "",
        user_password : ""
  })

  const changeHandler = (event)=>{
      const {name, value} = event.target;
      setDataForm({...dataForm, [name] : value})
  }

  const submitHandler = (event) => {
    event.preventDefault();
    iniciarSesion(dataForm.username, dataForm.user_password);
  }

  return {
    dataForm,
    inicioSesion,
    changeHandler,
    submitHandler

  }
}
