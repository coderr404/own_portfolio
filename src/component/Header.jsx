import React from 'react'
import styles from './Header.module.css'
import Logo from './Logo.jsx'
import Nav from './Nav.jsx'
import Login from './Login.jsx'

 function Header() {

  

  return (
    <>
    <header className = {`bg-slate-900 flex  h-20   items-center justify-between px-4 fixed w-full z-50 `}>
        <Logo></Logo>
        <Nav></Nav>
        
    </header>
    </>
  )
}

export default Header