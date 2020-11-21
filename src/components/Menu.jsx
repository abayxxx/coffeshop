import React from 'react'

export default function Menu() {
    return (
        <div className="text-center">
            <h3 className="text" style={{ fontSize: 40 }}>Our Menu</h3>
            <hr className="hr" />
            <div className="mt-5">
                <span className="mr-4 text-menu">All</span>
                <span className="mr-4 text-menu">Breakfast</span>
                <span className="mr-4 text-menu">Lunch</span>
                <span className="text-menu">Shakes</span>
            </div>
        </div>
    )
}
