import React from 'react'
import { Nav, Navbar, NavItem, NavLink } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar>
        <Nav style={{display:'flex', justifyContent:'space-around', alignItems:'center', height:'60px'}}>
            <NavItem>
                <NavLink href='/'>
                    <b>Home</b>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href='/services'>
                    <b>Services</b>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href='/contactme'>
                    <b>Contact Me</b>
                </NavLink>
            </NavItem>
            {/* <NavItem>
                <NavLink href='/blogs'>
                    <b>Blogs</b>
                </NavLink>
            </NavItem> */}
        </Nav>
        <hr/>
    </Navbar>
  )
}

export default Header