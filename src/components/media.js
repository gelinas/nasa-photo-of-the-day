import React from "react";

function Media(props) {
    console.log(`media props are: ${props.type} ${props.url} ${props.copyright} `);  
    // should be type, url, and copyright
    if (props.type === "image") {
        return (
            <>
                <img src={ props.url } />
                <p className="copyright">Copyright { props.copyright }</p>
            </>
        );
    }

    if (props.type === "video") {
        return (
            <>
                <iframe src={ props.url } />
                <p className="copyright">Copyright { props.copyright }</p>
            </>
        );
    }

    return (null);
}

export default Media;