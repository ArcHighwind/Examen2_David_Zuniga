import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TablaUsuarios } from './ComponentScreen/TablaUsuarios';
import { ErrorPage } from './ComponentScreen/ErrorPage';
import { FormPersonajes } from './ComponentScreen/FormPersonajes';
import { FormClass } from './ComponentScreen/FormClass';
import { FormWeapon } from './ComponentScreen/FormWeapons';
import { FormPower } from './ComponentScreen/FormPower';
import { FormInfo } from './ComponentScreen/FormInfo';
import { HomePage } from './ComponentScreen/HomePage';
import { Login } from './ComponentScreen/Login';
import { FormUserCreation } from './ComponentScreen/FormUserCreation';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/table' element={<TablaUsuarios/>} />
          <Route path='*' element={<ErrorPage/>} />
          <Route path='/personajes' element={<FormPersonajes/>} />
          <Route path='/class' element={<FormClass/>} />
          <Route path='/weapon' element={<FormWeapon/>} />
          <Route path='/power' element={<FormPower/>} />
          <Route path='/info' element={<FormInfo/>} />
          <Route path='/' element={<Login/>} />
          <Route path='/createUser' element={<FormUserCreation/>} />
          <Route path='/home' element={<HomePage/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

