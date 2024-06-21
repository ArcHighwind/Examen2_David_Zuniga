import React, { useState } from 'react'
import { LoginFormHook } from '../Hooks/LoginFormHook';

export const Login = () => {

    const {dataForm, changeHandler, submitHandler} = LoginFormHook();


    return (
        <>
           <div className='container' id='main' >
                <h1 className='mb-5' >Inicio Sesion</h1>
                <form onSubmit={submitHandler}>
                    <div className='mb-3'>
                        <label className="form-label">Username</label>
                        <input onChange={changeHandler} name="username"  type='text' className="form-control" />
                    </div>
                    
                    <div className='mb-3'>
                        <label className="form-label">Password</label>
                        <input onChange={changeHandler} name="user_password" type='password' className="form-control" />
                    </div>
                    <button type='submit' className='btn btn-primary w-100 mb-3'>Login</button>
                    <button className='btn btn-primary w-100 mb-3'>Register</button>
                    
                </form>
            </div>
        </>
    )
}
