import React from 'react'
import { GenericFormHook } from '../Hooks/GenericFormHook'

export const FormUserCreation = () => {

    const { changeHandler, submitHandler} = GenericFormHook("http://localhost:3000/api/user")
    const GoBack = ()=>{
        event.preventDefault();
        location.href = '/';
    }

  return (
    <>
        <div className='container'>
            <h2 className='mb-3'>User Registration</h2>
            <form onSubmit={submitHandler}>
                    <div className='mb-3'>
                        <label className="form-label">Username</label>
                        <input onChange={changeHandler} name="username"  type='text' className="form-control" />
                    </div>

                    <div className='mb-3'>
                        <label className="form-label">First Name/s</label>
                        <input onChange={changeHandler} name="first_name"  type='text' className="form-control" />
                    </div>

                    <div className='mb-3'>
                        <label className="form-label">Last Name/s</label>
                        <input onChange={changeHandler} name="last_name"  type='text' className="form-control" />
                    </div>

                    <div className='mb-3'>
                        <label className="form-label">Email</label>
                        <input onChange={changeHandler} name="email"  type='text' className="form-control" />
                    </div>
                    
                    <div className='mb-3'>
                        <label className="form-label">Password</label>
                        <input onChange={changeHandler} name="user_password" type='password' className="form-control" />
                    </div>
                    <button className='btn btn-primary w-100 mb-3'>Register</button>
                    <button onClick={GoBack} type='button' className='btn btn-primary w-100 mb-3'>Back</button>
                    
            </form>
        </div>
    </>
  )
}
