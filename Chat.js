import React, { Component } from 'react';

import { 
    View, 
    StyleSheet 
} from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat';
import { auth } from './Fire'



class Chat extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: (navigation.state.params || {}).name || 'Chat!',
      });

    state = {
        messages: [],
    };

    get user() {
        return {
            name: this.props.navigation.state.params.name,
            _id: Fire.shared.uid,
        };
    }   
   
    onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])
      
    render() {
        const [messages, setMessages] = useState([]);
        useEffect(() => {
            setMessages([
              {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                  _id: 2,
                  name: 'React Native',
                  avatar: 'https://placeimg.com/140/140/any',
                },
              },
            ])
          }, [])

        return (
            <GiftedChat
                messages = { messages }
                onSend = { messages => onSend(messages)}
                user = {{
                _id: 1,
                }}
            />
          );
    }
}
const styles = StyleSheet.create({});

export default Chat;