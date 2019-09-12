import React from "react";

function Explanation(props) {
    console.log(`explanation props are: ${props.text} `);  
    // should be text
    return (
        <div className="explanation">
            <p>{ props.text }</p>
        </div>
    );
}

export default Explanation;