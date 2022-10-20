import React from 'react'
import icon1 from '../assets/icon-moon.svg'
import './Header.css'

export default function Header() {
    return (

        <div className='card'>
            <span className='header1'>devfinder</span>
            <div className='txticon'>
                <p className='header2'>DARK</p>
                <img className='icon1' src={icon1} alt="" />
            </div>
        </div>

    )
}
