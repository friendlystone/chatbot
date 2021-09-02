import React, {Component, Fragment} from 'react';
import {
    StyleSheet, 
    Image,
    Button,

} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Container,
  Content,
  Left,
  Body,
  Right,
  Footer,
  Title,
  Input,
  Header,
} from 'native-base';

/** Images */
import Boy from './assets/boy.png';
import Adding from './assets/add.png'
import lego from './assets/lego.png';
import { TouchableOpacity } from 'react-native-gesture-handler';




class Chatroom extends Component {

  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.chatroomHeader}>
          <Left>
            <Button transparent>
              <Ionicons name="ios-menu" style={styles.chatHeaderIcons} />
            </Button>
          </Left>
          <Body>
            <Title style={{color: '#FB1963'}}>Chatroom</Title>
          </Body>
          <Right>
            <Button
              transparent
            >
              <Ionicons
                name="ios-close-circle-outline"
                style={styles.chatHeaderIcons}
              />
            </Button>
          </Right>
        </Header>
        <Content style={styles.container}>
          
        </Content>
        <Footer style={styles.footer}>
          <Input
            style={styles.Input}
            placeholderTextColor="#2E2D2C"
            placeholder="Type something"
            clearButtonMode={'always'}
            value={"some value"}
          />

          <TouchableOpacity
            style={{display: 'flex', alignItems: 'center'}}>
            <Image source={Adding} />
          </TouchableOpacity>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F9FA',
  },
  chatroomHeader: {
    backgroundColor: '#ffffff',
  },
  chatHeaderIcons: {
    color: '#FB1963',
    fontFamily: 'SF-UI-Display-Bold',
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  chatList: {
    marginTop: 10,
    marginBottom: 5,
  },
  chatBody: {
    backgroundColor: '#ffffff',
    borderRadius: 68,
    marginLeft: 22,
    paddingLeft: 30,
  },
  chatname: {
    color: '#95989A',
    marginBottom: 3,
    textTransform: 'capitalize',
    fontFamily: 'SF-UI-Display-Regular',
    fontSize: 12,
  },
  chatmsg: {
    fontFamily: 'SF-UI-Display-Regular',
    fontSize: 16,
    color: '#2E2D2C',
  },
  footer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 22,
    marginBottom: 16,
    marginLeft: 26,
    paddingLeft: 22,
    paddingTop: 14,
    paddingBottom: 16,
    paddingRight: 22.6,
  },
  Input: {
    fontFamily: 'SF-UI-Display-Regular',
    fontSize: 16,
    color: '#2E2D2C',
    backgroundColor: '#ffffff',
    marginRight: 7,
    borderRadius: 10,
    paddingLeft: 15,
    alignItems: 'center',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  right: {
    marginLeft: 10,
    display: 'flex',
    alignItems: 'center',
  },
});
