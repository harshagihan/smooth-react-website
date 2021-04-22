import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const ButtonWrapper = styled.button`
    padding: ${({ small }) => (small ?  "3px 25px" : "7 px 15px")};
    border-radius: 5px;
    background-color: ${theme.primary};
    color: #fff;
    font-weight;
    font-size: ${({ small }) => (small ?  "12px" : "16px")};
    outline: none;
    border: 2px solid transparent;
    transition: all 200ms ease-in-out; 
   
   &:hover {
   background-color: transparent;
   border: 2px solid ${theme.primary};
   }
`;
export function Button(props) {
    return <ButtonWrapper{...props}>{props.children}</ButtonWrapper>;
}