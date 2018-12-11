import React, { Component } from "react"
import { NavLink, Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <nav className="header gradient montserrat">
                <h1 className="header-title">
                    <Link className="hover:text-grey no-underline text-black"  to='/'>Portfolio - Hanna Linnéa Nyman</Link>
                </h1>
                <ul className="list-reset flex montserrat uppercase">
                    <li className="mr-6"><NavLink className="text-black hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}}  to='/about'>About Me</NavLink></li>
                    <li className="mr-6"><NavLink className="text-black hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}}  to='/projects'>My Projects</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Header