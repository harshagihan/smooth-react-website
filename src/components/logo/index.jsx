import React from "react";
import styled, { css } from "styled-components";

import Comlogo from "../../assests/logo/logo1.png"
import {theme} from "../../theme";

const LogoContainer = styled.div`
    display:flex;
    flex-direction: ${({ inline }) => inline ? "row" : "column"};
    align-item: ${({ inline }) => inline && "center"};
`;

const LogoImg = styled.img`
    width:8em;
    height:8em;
    ${({ inline }) => 
    inline && css`
    width: 120px;
    height:40px;
    margin-right: 5px;
    `};
`;

const LogoText = styled.div`
     margin-top:  ${({ inline }) => inline  ? 0 : "6px" };
     front Size : ${({ inline }) => inline  ? "16px" : "40px" };
     color: ${({ inline }) => inline ? "#fff" : theme.primary}; 
     font-weight:900;
`;

export function Logo(props) {
    const { inline } = props;

    return (
        <LogoContainer inline = { inline }>
        <LogoImg src={Comlogo} inline = { inline  }/>
    </LogoContainer>
    );
}