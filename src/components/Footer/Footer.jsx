import React from 'react'

export default function Footer(props) {
    return (
        <footer style={{'background-color':'cyan','height':'100px', 'bottom':'0', 'position':'fixed'}}>
            {props.title} &nbsp; &nbsp; &nbsp; {props.copyright}
        </footer>
    )
}