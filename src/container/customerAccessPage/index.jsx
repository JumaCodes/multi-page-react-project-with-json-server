import React from 'react'
import { Footer } from '../../components/footer'
import { Navbar } from '../../components/navbar'
import { AccountBox } from '../../components/accountBox'
import { InnerPageContainer, PageContainer } from '../../components/pageContainer'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
  margin-bottom: 4em;
`;

export function CustomerAccessPage(props) {
  const { action } = useParams();

  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>
        <StyledInnerContainer>
          <AccountBox initialActive={action} />
        </StyledInnerContainer>
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  )
}
