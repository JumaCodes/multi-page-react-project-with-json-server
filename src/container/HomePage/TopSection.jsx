import React from 'react'
import styled from 'styled-components';
import { Marginer } from '../../components/marginer';
import { BrandLogo } from '../../components/brandLogo';
import TopSectionBackgroundImg from '../../images/landing-page.jpg';
import TheBestSpecialistsImg from '../../images/Work only with the best.png';
import { Button } from '../../components/button';
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from '../../components/responsive';

const TopSectionContainer = styled.div`
  width: 100%;
  height: 900px;
  /* background-color: green; */
  background: url(${TopSectionBackgroundImg}) no-repeat;
  background-position: -30px -50px;
  background-size: cover;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 100%;
     height: 550px;
     background-position: -100px 20px;
  }
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(38, 70, 83, 0.8);
  display: flex;
  flex-direction: column;
  `

const TopSectionInnerContainer = styled.div`
   width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    justify-content: center;
  }
  `

const StandoutImage = styled.div`
  width: 38em;
  height: 30em;

  img {
    width: 100%;
    height: 100%;
  }
  `


const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction:column;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-content: center;
  }
`;

const SloganText = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 500;
  font-size: 30px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 24px;
  }
`;

export function TopSection(props) {
  const { children } = props;
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });


  return (
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <TopSectionInnerContainer>
        <LogoContainer>
            <BrandLogo
              logoSize={isMobile ? 40 : 65}
              textSize={isMobile ? 35 : 55}
            />
            <Marginer direction="vertical" margin={8} />
            <SloganText>Find the right specialist</SloganText>
            <SloganText>For the right job</SloganText>
            <Marginer direction="vertical" margin={15} />
            <Button>Join Now</Button>
          </LogoContainer>
          {!isMobile && 
        <StandoutImage>
          <img src={TheBestSpecialistsImg} alt="Best in the field" />
            </StandoutImage>
          }
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  )
}
