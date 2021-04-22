import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import {SectionTitle} from "../../components/sectionTitle";
import { Marginer } from "../../components/marginer";
import {OurService} from "../../components/ourService";

import ServiceImg from "../../assests/pictures/img4.png"
const ServicesContainer = styled(Element)`
    width: 100%;
    min-height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    background-color: rgba(76,137,251,1);
`;

export function SeviceSection(prop) {
    return (
    <ServicesContainer name="serviceSection">
        <Marginer direction="vertical" margin="9em" />
        <SectionTitle>The Future of Next Gen Programming</SectionTitle>
        <Marginer direction="vertical" margin="3em" />
        <OurService description="FutureGenLabs is a prestige company with years of experience and collaboration.
         “You need technology working for you not against you”,</p>
         FuturGenLabs always lean towards the latest technologies to offer the best solutions.
        Think ahead and start working to make your idea a reality."
        imgUrl={ServiceImg}
                    />
    </ServicesContainer>
    );
}