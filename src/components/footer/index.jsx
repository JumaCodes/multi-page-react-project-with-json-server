import { faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { BrandLogo } from '../brandLogo';
import { deviceSize } from '../responsive';



const FooterContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 3em;
  padding-bottom: 0;
  border-top: 0.6px solid rgba(0, 0, 0, 0.4);

   @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 2em 12px;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1em;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:not(:last-of-type) {
  margin-right: 4%;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-top: 0.6px solid rgba(0, 0, 0, 0.4);
  padding: 0 10px;

   @media screen and (max-width: ${deviceSize.mobile}px) {
    padding:  0;
  }
`;

const LeftBottomContainer = styled.div`
  display: flex;
`;

const RightBottomContainer = styled.div`
  display: flex;
`;

const Title = styled.div`
 margin: 0;
 margin-bottom: 15px;
 color: #000;
 font-weight: 600;
 font-size: 20px;

`;

const Flink = styled.a`
  text-decoration: none;
  color: #6F6F6F;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }

  &:hover {
    color: #2ba679;
  }
`;

const PrivacyText = styled.h6`
  color: #a3a3a3;
  font-size: 11px;
  margin: 0;
  margin-left: 10px;
  display: flex;
  margin-top: 5px;
  align-items: center;

   @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 8px;
  }
`;

const SocialIcon = styled.div`
  color: #8A8A8A;
  font-size: 20px;
  cursor: pointer;
  transition: background-color, 200ms ease-in-out;

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  &:hover {
    color: #777777;
  }

   @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 17px;
  }
`;


export function Footer() {
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  return (
    <FooterContainer>
      <TopContainer>
        <ContentContainer>
          <Title>Categories</Title>
          <Flink>Car repair</Flink>
          <Flink>Carpentry</Flink>
          <Flink>Landscaping</Flink>
          <Flink>Cleaning</Flink>
          <Flink>Moving</Flink>
          <Flink>Demolition</Flink>
          <Flink>Home improvement</Flink>
          <Flink>Others</Flink>
        </ContentContainer>

        <ContentContainer>
          <Title>Access</Title>
          <Flink>Login</Flink>
          <Flink>Join Us</Flink>
          <Flink>Landscaping</Flink>
          <Flink>Login as Specialist</Flink>
          <Flink>Become a Specialist</Flink>
        </ContentContainer>
      </TopContainer>
      <BottomContainer>
        <LeftBottomContainer>
          <BrandLogo hideLogo color="#8A8A8A" textSize={isMobile ? 20 :25} />
          <PrivacyText> &#169; All Rights Reserved. 2021</PrivacyText>
        </LeftBottomContainer>
        <RightBottomContainer>
          <SocialIcon>
           <FontAwesomeIcon icon={faFacebook} />
          </SocialIcon>
          <SocialIcon>
           <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
        </RightBottomContainer>
      </BottomContainer>
    </FooterContainer>
  )
}
