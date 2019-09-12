import React from "react";

function Header(props) {

    console.log(`header props are: ${props.title} ${props.date} `);  
    // should be title and date
    return (
        <div className="header">
            <h1>{ props.title }</h1>
            <h3>Image for { props.date }</h3>
        </div>
    );
}

export default Header;