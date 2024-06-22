import React from 'react'

export const HomePage = () => {

  const APersonaje = ()=>{
    location.href = '/personajes'
  }
  const APower = ()=>{
    location.href = '/power'
  }
  const AClass = ()=>{
    location.href = '/class'
  }
  const AWeapon = ()=>{
    location.href = '/weapon'
  }
  const AInfo = ()=>{
    location.href = '/info'
  }


  return (
    <>
        <div>
            <h3>Welcome to your home Page!</h3>
            <h4>It's quite empty at the moment, but many features will be coming soon!</h4>
            <br/>
            <h4>Click on the buttons to start making your character.</h4>
            <p>Create the Name and give your character their age here: </p>
            <button onClick={APersonaje} type='button' className='btn btn-info w-100 mb-3'>Character</button>
            <p>Give them their unique power here:</p>
            <button onClick={APower} type='button' className='btn btn-danger w-100 mb-3'>Unique Power</button>
            <p>Create their Class:</p>
            <button onClick={AClass} type='button' className='btn btn-success w-100 mb-3'>Class</button>
            <p>Give them their preffered weapon:</p>
            <button onClick={AWeapon} type='button' className='btn btn-secondary w-100 mb-3'>Preffered Weapon</button>
            <p>Write a bit about them:</p>
            <button onClick={AInfo} type='button' className='btn btn-light w-100 mb-3'>Character Info</button>
        </div>
    </>
  )
}
