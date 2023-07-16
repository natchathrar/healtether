import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Main() {
    return (
        <div>
            <Navbar />
            <div className='container-fluid p-0' style={{ margin: '10rem 0px 3rem', }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
