import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import {faTwitter, faLinkedin, faYoutube, faFacebook} from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    background-color: rgba(76,137,251,1) 
`;

const Line = styled.span`
   min-size: 100%;
   min-height: 1px;
   margin-bottom:1em;
   background-color: rgba (0,0,0,0.8);
   display: flex;
`;
const FotterText = styled.div`
 font-size: 16px;
 font-weight: 500;
 line-height: 1.4;
 color: rgb (0,0,0);
 margin: 0;

`;


const AccessibilityContainer = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid rgb (0,0,0);
  padding-top: 12px;
  padding-right: 10px;
  padding-left: 10px;
  color: rgb (0,0,0);
  justify-content: space-between;
  background-color: rgba(76,137,251,1)
`;
const PrivacyContainer = styled.div`
 display:flex;
`;
const SocialContainer = styled.div`
 display: flex;
`;

const SocailIcon = styled.div`
    color: #fff;
    font-size: 20px;
    transition: all 200ms ease-in-out;
    
    &:Not(:last-of-type) {
    margin-right: 30px;
    }
    
    &:hover {
     color: #adadad;
     }
`;

const Link = styled.a`
    color: rgb(0,0,0);
    transition: all 200ms ease-in-out;

    &:Not(:last-of-type) {
    margin-right: 50px;
     }
     
     
     &:hover {
     color: #adadad;
     }

`;
export function Footer(props) {

    return(
        <FooterContainer>
            <FotterText>
                <p>No:235/10A,</p>
                <p>Wijethunga lane Bandaranayaka Road,</p>
                <p>Katubedda,</p>
                <p>Moratuwa,</p>
                <p>Sri Lanka.</p>
                <p>Phone: +94710808003</p>
                <p>Email: futuregenlabs@gmail.com</p>
                <Marginer direction="vertical" margin="1em" />
                <p>1/4, Stewart Road,</p>
                <p>Oakleigh East,</p>
                <p>VIC 3166,</p>
                <p>Australia.</p>
                <p>Phone: +61 422 690 053</p>
            </FotterText>
            <Marginer direction="vertical" margin="5em" />
            <AccessibilityContainer>
                <PrivacyContainer>
                    <Link>PRIVACY POLICY</Link>
                    <Link>TERM AND CONDITIONS</Link>
                </PrivacyContainer>
                <SocialContainer>
                   <SocailIcon>
                       <FontAwesomeIcon icon={faTwitter}/>
                   </SocailIcon>
                    <SocailIcon>
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </SocailIcon>
                    <SocailIcon>
                        <FontAwesomeIcon icon={faFacebook}/>
                    </SocailIcon>
                    <SocailIcon>
                        <FontAwesomeIcon icon={faYoutube}/>
                    </SocailIcon>
                </SocialContainer>
            </AccessibilityContainer>

        </FooterContainer>
    );


}
