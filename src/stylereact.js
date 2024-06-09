import React from "react";
import styled from "styled-components";

//utilisation de styled-components pour 
// définir un composant stylisé

const  StDiv = styled.div`
    background-color : #f0f0f0;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;
const StH1= styled.h1`
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;
`;
const StyledComponent= ()=>{
    return (
        <StDiv>
            <StH1>composant Stylise</StH1>
            <p>Ce composant est stylise avec styled-component</p>
        </StDiv>
    );
};
export default StyledComponent;