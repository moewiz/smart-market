import React from 'react';
import { Container, Left, Body, Title, Right, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import Post from './src/Post';

export default class App extends React.Component {
  render() {
    return (
      <Container> 
        <Header>
           <Left>
            <Button transparent>
              <Icon name="camera" />
            </Button>
          </Left> 
          <Body>
            <Title>
              Tini Photo+
            </Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="send"></Icon>
            </Button>
          </Right>
        </Header>
        <Content>
          <Post />
          <Post />
        </Content>
        <Footer>
          <FooterTab>
            <Button active>
              <Icon active name="home"></Icon>
            </Button>
            <Button>
              <Icon name="search"></Icon>
            </Button>
            <Button>
              <Icon name="add"></Icon>
            </Button>
            <Button>
              <Icon name="heart"></Icon>
            </Button>
            <Button>
              <Icon name="person"></Icon>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
