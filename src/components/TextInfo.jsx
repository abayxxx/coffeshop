import React from 'react'
import { Button } from 'react-bootstrap'
import { Route, Link } from 'react-router-dom'

export default function TextInfo() {
    return (
        <div>
            <div className="mr-5" style={{ float: "left" }}>
                <h3 className="text" style={{ fontSize: 50 }}>
                    Coffeeshop
                </h3>
                <p className="mt-5 mb-4 text text-animate text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quo ut aspernatur voluptatum? Libero molestias, odit magnam voluptatum magni officia eum temporibus reprehenderit beatae molestiae doloremque, adipisci laboriosam eligendi harum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quo ut aspernatur
                </p>
                <Route>
                    <Link to="/menu">
                        <Button variant="danger" className="button text">
                            Menu
                        </Button>
                    </Link>
                </Route>
            </div>

        </div>
    )
}
