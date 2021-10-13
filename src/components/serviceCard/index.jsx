import React from 'react';
import styled from 'styled-components';
import { Marginer } from '../marginer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { deviceSize } from '../responsive';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 250px;
  min-height: 250px;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  margin: 0.5em;
  margin-bottom: 1.3em;

   
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 300px;
  margin: 30px auto;
  }

`;

const TopContainer = styled.div`
  width: 100%;
`;

const ServiceThumbnail = styled.div`
  width: 100%;
  height: 11em;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding: 15px 14px;



`;

const BottomContainer = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(15, 15, 15, 0.19);
  padding: 0 10px;
  /* padding-top: 15px; */
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0;
  font-weight: 700;
  color: #2ba679;
  /* padding: 0 15px; */
  text-align: start;
`;

const SpecialistName = styled.h4`
  margin: 0;
  color: rgba(151, 151, 151, 1);
  font-size: 12px;
  font-weight: 400;
  /* padding: 0 15px; */
`;

const RatingContainer = styled.div`
  display: flex;
  color: #EBE204;
  align-items: center;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PriceText = styled.div`
  margin: 0;
   color: #2ba679;
  font-weight: 700;
`;

const StartingAtText = styled.h6`
  margin: 0;
  color: rgba(161, 161, 161);
  font-weight: 400;
`;


export function ServiceCard(props) {
  const { title, thumbnailUrl, rate, rating, specialist, } = props;
  
  return (
    <CardContainer>
      <TopContainer>
        <ServiceThumbnail>
          <img src={thumbnailUrl} alt="title" />
        </ServiceThumbnail>
      </TopContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <Marginer direction="vertical" margin={10} />
        <SpecialistName>{specialist.fullName}</SpecialistName>
        <Marginer direction="vertical" margin={20} />
      </ContentContainer>
      <BottomContainer>
          <RatingContainer>
            <FontAwesomeIcon icon={faStar} size="sm" />
            <Marginer direction="horizontal" margin={5} />
            {rating}
          </RatingContainer>
          <PriceContainer>
            <StartingAtText>STARTING AT</StartingAtText>
            <Marginer direction="horizontal" margin={5} />
            <PriceText>${rate}/hr</PriceText>
          </PriceContainer>
        </BottomContainer>
    </CardContainer>
  )
}
