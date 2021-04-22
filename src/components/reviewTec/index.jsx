import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import 'pure-react-carousel/dist/react-carousel.es.css';

const tecContainer = styled.div`
    width: 360px;
    height: 450px;
    background-color: #fff;
    box-shadow: 0px 0px 7px rgba(17, 17, 17, 0.2);
    border-radius: 15px;
    margin:5px 2em;
    position: relative;
`;

const ReviewText = styled.p`
  font-size: 17px;
  color: #585858;
  font-weight: normal;
  display: flex;
  justify-content: center;
`;


const TecImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10%;
  margin-right: 20px;
  margin-left: 20px;
`;



export function ReviewTec(props) {
    const {  tecImgUrl } = props;

    return (
        <tecContainer>

            <Marginer direction="vertical" margin="5em" />
                <TecImg src={tecImgUrl} />
        </tecContainer>
    );
}