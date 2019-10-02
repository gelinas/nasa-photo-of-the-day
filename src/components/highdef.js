import React from "react";

function Highdef(props) {
    console.log(`highdef props are: ${props.hdurl} `);  
    // should be hdurl
    return (
        <>
            <a href={ props.hdurl }>Click to see in HD</a>
        </>
    );
}

export default Highdef;