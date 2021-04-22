import React from "react";
import styled from "styled-components";
import {Logo} from "../logo";
import {Button} from "../button";

const  NavbarContainer = styled.div`
    width: 100%;
    height: 50px;
    padding: 0 2em;
    display: flex;
    align-item: center;
    justify-content: space-between;
    background-color: black;
`;

const BrandContainer = styled.div`

`;
const AccessibilityContainer = styled.div`
 
`;
const Homebutton = styled(Button)`
    background-color: transparent;
    border: none;

 &:hover{
        background-color: transparent;
        border: none;
        color: rgb(212, 212, 212);
      }
`;

export function Navbar(props){
    return (
        <NavbarContainer>
        <BrandContainer>
           <Logo inline />
        </BrandContainer>
            <Homebutton>Home</Homebutton>
            <Homebutton>About Us</Homebutton>
            <Homebutton>Portfolio</Homebutton>
            <Homebutton>Services</Homebutton>
            <Homebutton>Pricing</Homebutton>
            <Homebutton>Blog</Homebutton>
            <AccessibilityContainer>
                <Button small>Contact us</Button>
            </AccessibilityContainer>
    </NavbarContainer>
    );
}