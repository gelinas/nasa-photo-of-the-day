import React from "react";
import styled from "styled-components";


const Header = styled.div`
    width: 100%;
    background: rgb(40, 44, 51);
    color: #FFF;
    margin: 0 auto;
    padding: 10px;
    border: 2px solid rgb(76, 76, 76);
`;

// const MediaContainer = styled.div`
//     background-color: orange;
// `;

function PageHeader(props) {

    console.log(`header props are: ${props.title} ${props.date} `);
    console.log(Header);  
    // should be title and date
    return (
        <Header>
            <h1>{ props.title }</h1>
            <h3>Image for { props.date }</h3>
        </Header>
    );
}

export default PageHeader;