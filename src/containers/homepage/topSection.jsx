import React from "react";
import styled from "styled-components";
import { Element, scroller } from "react-scroll";
import BackgroundImg from "../../assests/pictures/img1.jpg";
import {DownArrow} from "../../components/downAroow";
import {Navbar} from "../../components/navbar";

const TopContainer = styled.div`
    width: 100%;
    height:100vh;
    padding: 0;
    background-image:url(${BackgroundImg});
    position: relative;
    `;

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(56, 56, 56, 0.80);
    display:flex;
    flex-direction:column;
    align-items: center;
`;

const MotivationalText = styled.h1`
    font-size: 33px;
    font-weight: medium;
    color: #fff;
    margin: 0;
`;

const DownArrowContainer = styled.div`
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    
`;

   
export function TopSection(props) {

    const  scrollTonextSection = () => {
        scroller.scrollTo("servicesSection", { smoth: true, duration: 1500})
    }


    return (
        <Element name="topSection">
        <TopContainer>
        <BackgroundFilter>
            <Navbar />
            <DownArrowContainer onClick={scrollTonextSection()}>
                <DownArrow />
            </DownArrowContainer>
        </BackgroundFilter>
    </TopContainer>
        </Element>
    );
}
