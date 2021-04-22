import React from "react";
import styled from "styled-components";
import { Element, scroller } from "react-scroll";
import BackgroundVideo from "../../assests/video/Home.mp4";
import {DownArrow} from "../../components/downAroow";
import {Navbar} from "../../components/navbar";

const TopContainer = styled.div`
    width: 100%;
    height:105vh;
    padding: 0;
    auto-play: autoplay;
    loop: loop;
    background-video:url(${BackgroundVideo});
    position: relative;
    `;

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(56, 56, 56, 0.3);
    display:flex;
    flex-direction:column;
    align-items: center;
`;

const BackVideo = styled.video`
    width: 100%;
    height:100%;
    padding: 0;
    auto-play: autoplay;
    background-image:url(${BackgroundVideo});
    loop: loop;
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
        scroller.scrollTo("ServicesSection", { smoth: true, duration: 1500})
    }


    return (
        <Element name="topSection">
        <TopContainer>
            <Navbar />
            <video width='1381px' height='780px' autoplay='autoplay' muted loop>
                <source src={BackgroundVideo} type="video/webm"/>
            </video>
            <DownArrowContainer onClick={scrollTonextSection()}>
                <DownArrow />
            </DownArrowContainer>
    </TopContainer>
        </Element>
    );
}
