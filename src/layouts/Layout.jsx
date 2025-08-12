import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <div className="min-h-screen bg-violet-100">
      <div className="">
        <Header />
      </div>
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
