import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle, SectionTitle2} from "../../components/sectionTitle";
import { Marginer } from "../../components/marginer";
import {CarouselProvider, DotGroup, Slide, Slider} from "pure-react-carousel";
import {ReviewTec} from "../../components/reviewTec";

import Tec1img from "../../assests/pictures/t1.png"
import Tec2img from "../../assests/pictures/t2.png"
import Tec3img from "../../assests/pictures/t3.png"
import Tec4img from "../../assests/pictures/t4.png"
import Tec5img from "../../assests/pictures/t5.png"
import Tec6img from "../../assests/pictures/t6.png"
import Tec7img from "../../assests/pictures/t7.png"
import Tec8img from "../../assests/pictures/t8.png"
import Tec9img from "../../assests/pictures/t9.png"
import Tec10img from "../../assests/pictures/t10.jpg"


const  ReviewsContainer = styled(Element)`
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
 `;
const StyledCarouselProvider = styled(CarouselProvider)`
  width: 60%;
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

export function TecSection(props) {
    return(
        <ReviewsContainer>
            <SectionTitle>We have the technologies you need.
                We can help you succeed.</SectionTitle>
            <SectionTitle2>The best way to get maximum quality and performance of our application is to use the latest technologies which gives our consumers user friendly,
                cutting edge experience with less latency and more productivity</SectionTitle2>
            <Marginer direction="vertical" margin="3em" />
            <StyledCarouselProvider
                naturalSlideWidth={200}
                naturalSlideHeight={300}
                totalSlides={10}
                visibleSlides={3}>
                <Slider>
                    <StyledSlide index={0}>
                    <ReviewTec
                        tecImgUrl={Tec1img}
                    />
                    </StyledSlide>
                    <StyledSlide index={1}>
                        <ReviewTec
                            tecImgUrl={Tec2img}
                        /></StyledSlide>
                    <StyledSlide index={2}>
                        <ReviewTec
                            tecImgUrl={Tec3img}
                        /></StyledSlide>
                    <StyledSlide index={3}>
                        <ReviewTec
                            tecImgUrl={Tec4img}
                        /></StyledSlide>
                    <StyledSlide index={4}>
                        <ReviewTec
                            tecImgUrl={Tec5img}
                        /></StyledSlide>
                    <StyledSlide index={5}>
                        <ReviewTec
                            tecImgUrl={Tec6img}
                        /></StyledSlide><StyledSlide index={6}>
                    <ReviewTec
                        tecImgUrl={Tec7img}
                    /></StyledSlide><StyledSlide index={7}>
                    <ReviewTec
                        tecImgUrl={Tec8img}
                    /></StyledSlide><StyledSlide index={8}>
                    <ReviewTec
                        tecImgUrl={Tec9img}
                    /></StyledSlide>
                    <StyledSlide index={9}>
                        <ReviewTec
                            tecImgUrl={Tec10img}
                        />
                    </StyledSlide>
                </Slider>
                <DotGroup />
            </StyledCarouselProvider>
        </ReviewsContainer>

    );
}