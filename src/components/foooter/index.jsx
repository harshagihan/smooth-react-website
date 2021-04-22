import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { SectionTitle3, SectionTitle2, SectionTitle4} from "../../components/sectionTitle";

const FooterContainer = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    background-color: rgba(76,137,251,1) 
    
    
`;

export function Footer(props) {

    return(
        <FooterContainer>
            <SectionTitle3><p>Contact us </p>
            </SectionTitle3>
            <SectionTitle4>
                <p>No:235/10A,</p>
                <p>Wijethunga lane Bandaranayaka Road,</p>
                <p>Katubedda,</p>
                <p>Moratuwa</p>
                <p>Sri Lanka</p>
                <p>Phone: +94710808003</p>
                <p>Email: futuregenlabs@gmail.com</p>
                <Marginer direction="vertical" margin="1em" />
                <p>1/4, Stewart Road</p>
                <p>Oakleigh East</p>
                <p>VIC 3166</p>
                <p>Australia</p>
                <p>Phone: +61 422 690 053</p>
            </SectionTitle4>
        </FooterContainer>
    );


}
