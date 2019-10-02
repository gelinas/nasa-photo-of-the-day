import React from "react";
import styled from "styled-components";

const InfoCard = styled.div`
    transition: transform 0.2s ease-in;
    background: rgb(215, 215, 215);
    color: black;
    width: 100%;
    max-width: 800px;
    text-align: center;
    margin: 20px auto;
    cursor: pointer;
    box-shadow: 0px 1px 6px -2px grey;

    &:hover {
        transform: translateY(-5px) scale(1.05);
    }
`;

function Explanation(props) {
    console.log(`explanation props are: ${props.text} `);  
    // should be text
    return (
        <InfoCard>
            <p>{ props.text }</p>
        </InfoCard>
    );
}

export default Explanation;