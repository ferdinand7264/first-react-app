import React from 'react'

export default function Alert(props) {
    return (
        <div className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <h1>This is About Page</h1>
        </div>
    )
}