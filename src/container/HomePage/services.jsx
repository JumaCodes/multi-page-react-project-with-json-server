import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Axios from 'axios';
import { ServiceCard } from '../../components/serviceCard';
import { Button } from '../../components/button';
import { Marginer } from '../../components/marginer';
import { deviceSize } from '../../components/responsive';

const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 40px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
   align-items: center;
   justify-content: center;
   padding-left: 0;
  }
`;

const Title = styled.h1`
  font-weight:900;
  color: #000;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size:  25px;
  }
`;

const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  
`;

const WarningText = styled.h3`
  width: 1100px;
  padding: 100px 0;
  background-color: #000;
  color: rgb(100, 100, 100);
  font-weight: 500;
  text-align: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 200px;
    padding: 20px 0;
  }
`;

const ViewMoreButton = styled(Button)`
  background-color: #F2F2F2;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  color: #959595;
  font-size: 14px;
  
  &:hover {
    background-color: #F2F2F2;
    filter: contrast(0.8);
  }
`;

// const wait = (num) => new Promise((rs) => setTimeout(rs, num));


export function Services(props) {
  const [offeredServices, setOfferedServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const isServicesEmpty = !offeredServices || (offeredServices && offeredServices.length === 0);

  const fetchServices = async () => {
    setIsLoading(true);
    const response = await Axios.get('http://localhost:9000/services')
      .catch((err) => {
        console.log('Error: ', err);
      });
    
   
    
    if (response) {
      setOfferedServices(response.data);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    fetchServices();
  }, []);

  
  return (
    <ServicesContainer>
      <Title>Most Used Services & More</Title>
      <ServicesWrapper>
        {isServicesEmpty && !isLoading && (
          <WarningText>No Services are published yet!</WarningText>
        )}
        {isLoading && (
          <WarningText>Loading...</WarningText>
        )}
        {!isServicesEmpty && !isLoading && offeredServices.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </ServicesWrapper>
      <Marginer direction="vertical" margin={50} />
      <BottomContainer>
        {!isServicesEmpty && !isLoading &&  (
        <ViewMoreButton>View More</ViewMoreButton>
        )}
      </BottomContainer>
    </ServicesContainer>
  )
}
