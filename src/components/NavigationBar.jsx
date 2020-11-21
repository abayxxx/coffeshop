import React from 'react'
import { Navbar, Nav } from "react-bootstrap"
import { Route, Link } from "react-router-dom"
import icon from '../assets/img/icon2.png'

export default function NavigationBar() {
    return (
        <div>
            <Navbar variant="light" expand="md">
                <Route>
                    <Link to="/">
                        <Navbar.Brand className="text" style={{ fontSize: 25 }}>
                            <img src={icon} alt="icon" style={{ width: 30 }} />
                            {" "}
                    Coffeeshop
                </Navbar.Brand>
                    </Link>
                </Route>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav>
                        <Route>
                            <Link style={{ textDecoration: 'none' }} to="/">
                                <Nav.Link className="mr-4 text">Home</Nav.Link>
                            </Link>
                        </Route>
                        <Nav.Link href="#pricing" className="mr-4 text">Product</Nav.Link>
                        <Nav.Link href="#features" className="mr-4 text">About</Nav.Link>
                        <Nav.Link href="#contact" className="text">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
