import React from "react";
import styled from "styled-components";
import {TopSection} from "./topSection";
import {SeviceSection} from "./serviceSection";
import {ReviewsSection } from "./reviewsSection";
import {Marginer} from "../../components/marginer";
import {TecSection} from "./tecSection";
import {Footer} from "../../components/foooter";

const PageContainer = styled.div`
     width:100%;
     height:100%;
     display:flex;
     flex-direction:column;
`;

export function Homepage(props) {
    return<PageContainer>
        <TopSection />
        <SeviceSection />
        <Marginer direction="vertical" margin="2" />
        <TecSection />
        <Marginer direction="vertical" margin="2" />
        <ReviewsSection />
        <Marginer direction="vertical" margin="3" />
        <Footer />


    </PageContainer>
}