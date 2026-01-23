import React from 'react'
import logo from "../assets/logo.jpg";
import styles from './Logo.module.css'

 function Logo() {
  return (
    <>
    {/* <img src={logo} className={styles.logo} alt="logo" /> */}
    <h3 className={`text-white font-bold text-2xl  ${styles.logo}`}>My&nbsp;<span className={`text-sky-400`}> Site</span></h3>
    </>
  )
}

export default Logo