import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Daniel Guilherme" image="https://avatars.githubusercontent.com/u/127464189?s=400&u=b61a7eb163b086f66fee9aad4de3300d81dcacc4&v=4" percentual={25}/>
                <UserInfo nome="Daniel Guilherme" image="https://avatars.githubusercontent.com/u/127464189?s=400&u=b61a7eb163b086f66fee9aad4de3300d81dcacc4&v=4" percentual={65}/>
                <UserInfo nome="Daniel Guilherme" image="https://avatars.githubusercontent.com/u/127464189?s=400&u=b61a7eb163b086f66fee9aad4de3300d81dcacc4&v=4" percentual={45}/>
                <UserInfo nome="Daniel Guilherme" image="https://avatars.githubusercontent.com/u/127464189?s=400&u=b61a7eb163b086f66fee9aad4de3300d81dcacc4&v=4" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 