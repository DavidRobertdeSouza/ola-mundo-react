import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './MenuLink.module.css'

export default function MenuLink({children, to}) {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <NavLink className={` ${styles.link}`} 
          style={({ isActive }) => isActive ? activeStyle : undefined}
          to={to}>
            {children}
     </NavLink>
  )
}


          // ${localizacao.pathname === to ? styles.linkDestacado : ""}