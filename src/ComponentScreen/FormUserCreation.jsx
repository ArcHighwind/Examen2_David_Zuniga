import React from 'react'

export const FormUserCreation = () => {
  return (
    <>
        <div className='container'>
            <h2 className='mb-3'>User Registration</h2>
            <form>
                    <div className='mb-3'>
                        <label className="form-label">Username</label>
                        <input name="username"  type='text' className="form-control" />
                    </div>

                    <div className='mb-3'>
                        <label className="form-label">First Name/s</label>
                        <input name="username"  type='text' className="form-control" />
                    </div>

                    <div className='mb-3'>
                        <label className="form-label">Last Name/s</label>
                        <input name="username"  type='text' className="form-control" />
                    </div>

                    <div className='mb-3'>
                        <label className="form-label">Email</label>
                        <input name="username"  type='text' className="form-control" />
                    </div>
                    
                    <div className='mb-3'>
                        <label className="form-label">Password</label>
                        <input name="user_password" type='password' className="form-control" />
                    </div>
                    <button className='btn btn-primary w-100 mb-3'>Register</button>
                    
            </form>
        </div>
    </>
  )
}
