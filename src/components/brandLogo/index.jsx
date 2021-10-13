import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from '../../images/logos/logo.png'

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
  width: ${({ size }) => size ? size + 'px' : '2em'};
  height: ${({ size }) => size ? size + 'px' : '2em'};

  img {
    width: 100%;
    height: 100%;
  }
  
`;

const LogoTitle = styled.h2`
 margin: 0;
 font-size: ${({ size }) => size ? size + 'px' : '20px'};
 color: ${({ color }) => color ? color : '#fff'};
 font-weight: 700;
  margin-left: 6px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;


export function BrandLogo(props) {
  const {logoSize, textSize, color, hideLogo} = props;
  return (
    <BrandLogoContainer>
      {!hideLogo && <StyledLink to='/'><LogoImage size={logoSize}>
       <img src={LogoImg} alt="Servycing Logo" />
      </LogoImage>
      </StyledLink>
      }
      <StyledLink to="/">
        <LogoTitle size={textSize} color={color}>Servycing</LogoTitle>
      </StyledLink>
    </BrandLogoContainer>
  )
}
