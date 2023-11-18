import React from 'react'
import { NavLink } from 'react-router-dom'
import { WebRoutes } from '../WebRoutes';

// const navigation =[  belede yazmaq olar.
//   {
//     id:1,
//     to: '/',
//     path:'Home'
//   }
// ]

const Navigation = ({ }) => {
  return (
    <nav>
      {
        WebRoutes.map(({ title, id, path }) => {
          return (
            title && <NavLink
              className={({ isActive }) => (isActive ? 'navlink active' : 'navlink')}
              key={id} to={path}>
              {title}
            </NavLink>
          )
        })
      }
    </nav>
  )
}

export default Navigation