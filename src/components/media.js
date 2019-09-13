import React from "react";
import styled from "styled-components";


const MediaContainer = styled.div`
    max-width: 800px;
    width: 100%;
    background-color: #FFF;
    color: #000000;
    border: 0;
    margin: 20px auto;
    padding: 10px;
    transition: transform 0.2s ease-in;
    cursor: pointer;
    box-shadow: 0px 1px 6px -2px grey;

    &:hover {
        transform: scale(1.05);
    }
`;

function Media(props) {
    console.log(`media props are: ${props.type} ${props.url} ${props.copyright} `);  
    // should be type, url, and copyright
    console.log(MediaContainer);
    if (props.type === "image") {
        return (
            <MediaContainer>
                <img src={ props.url } alt={ props.copyright }/>
                <p className="copyright">Copyright { props.copyright }</p>
            </MediaContainer>
        );
    }

    if (props.type === "video") {
        return (
            <MediaContainer>
                <iframe src={ props.url } />
                <p className="copyright">Copyright { props.copyright }</p>
            </MediaContainer>
        );
    }

    return (null);
}

export default Media;