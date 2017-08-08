import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Card, Icon, CardItem, Left, Body, Right, Text, Button } from 'native-base';

const styles = StyleSheet.create({
  avatar: {
    borderWidth: 0.5,
    borderColor: 'silver',
    borderRadius: 20,
    width: 40,
    height: 40,
  }
});

export default class Post extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Image source={{ uri: 'http://via.placeholder.com/40x40' }} style={styles.avatar} />
            <Body>
              <Text>Khoa Nguyen</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <Image source={{ uri: 'http://via.placeholder.com/300x200' }} style={{ width: '100%', height: 200, flex: 1}} /> 
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Magni, velit doloribus, fugit repellendus incidunt eos fuga.
              Beatae illum nostrum qui. Quos quidem dignissimos repellendus.
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Body>
              <Button transparent>
                <Icon name="heart" />
              </Button>
              <Button transparent>
                <Icon name="chatbubbles" />
              </Button>
              <Button transparent>
                <Icon name="send" />
              </Button>
            </Body>
          </Left>
          <Right>
            <Button>
              <Icon name="bookmark" />
            </Button>
          </Right>
        </CardItem>
        <CardItem>
          <Text note>14 minutes ago</Text>
        </CardItem>
      </Card>
    );
  }
}
