import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle, SectionTitle2} from "../../components/sectionTitle";
import { Marginer } from "../../components/marginer";
import {CarouselProvider, DotGroup, Slide, Slider} from "pure-react-carousel";
import {ReviewCard} from "../../components/reviewCard";

import User1img from "../../assests/pictures/cl1.jpg";
import User2img from "../../assests/pictures/cl2.png";
import User3img from "../../assests/pictures/cl3.jpeg";


const  ReviewsContainer = styled(Element)`
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
 `;
const StyledCarouselProvider = styled(CarouselProvider)`
  width: 50%;
`;
const StyledSlide = styled(Slide)`
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
  }
`;
const StyledDotGroup = styled(DotGroup)`
  margin: auto;
  display: flex;
  justify-content: center;
  button {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #e4e4e4;
    border: none;
    outline: none;
    &:not(:last-of-type) {
      margin-right: 3px;
    }
  }
  .carousel__dot--selected {
    background-color: #c4c4c4;
  }
`;

export function ReviewsSection(props) {
    return(
        <ReviewsContainer>
            <SectionTitle>Our Clients</SectionTitle>
            <SectionTitle2>Here’s what they’re saying.</SectionTitle2>
            <Marginer direction="vertical" margin="3em" />
            <StyledCarouselProvider
                naturalSlideWidth={200}
                naturalSlideHeight={300}
                totalSlides={3}
                visibleSlides={2}>
                <Slider>
                    <StyledSlide index={0}>
                        <ReviewCard
                            reviewText="We got chance to work with FutureGenLabs on a project to digitize our company management system.
                                            The experience and the output of the project is truly amazing"
                            username="Harith Kumara"
                            userImgUrl={User1img}
                    /></StyledSlide>
                    <StyledSlide index={1}>
                        <ReviewCard
                            reviewText="FutureGenLabs work on revamping our online platform and optimizing our search engine ranking.
                                        Their work really boost our business process and imporve customer experience."
                            username="Peter Doherty"
                            userImgUrl={User2img}
                        /></StyledSlide>
                    <StyledSlide index={2}>
                        <ReviewCard
                            reviewText="Customer service and communication is excellent aspect of FutureGenLabs.
                                     Looking forward to work with them again."
                            username="Srinivas Krishna"
                            userImgUrl={User3img}
                        /></StyledSlide>
                </Slider>
                <DotGroup />
            </StyledCarouselProvider>
        </ReviewsContainer>

    );
}
