import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `hover:underline ${isActive ? 'font-bold' : ''}`}
  >
    {children}
  </NavLink>
)

export default function Header(){
  return (
    <>
    <div className="pt-8">
    </div>
    <div className="flex justify-center py-6">
      <nav className="flex justify-center w-full">
        <div className="flex flex-row justify-start w-full max-w-2xl mx-auto px-12 py-8">
          <NavItem to="/" end>
            <span className="text-base">{'Me (9-5)'}</span>
          </NavItem>
          <NavItem to="/about" end>
            <span className="text-base ml-8">{'Me (5-9)'}</span>
          </NavItem>
          <NavItem to="/writing">
            <span className="text-base ml-8">{'Yap'}</span>
          </NavItem>
          <NavItem to="/cv">
            <span className="text-base ml-8">{'CV'}</span>
          </NavItem>
        </div>
      </nav>
    </div>
    </>
  )
}
