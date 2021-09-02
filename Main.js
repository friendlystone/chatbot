import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    TextInput, 
    Text,
    TouchableOpacity
} from 'react-native';

class Main extends Component {
    state = { 
        name: '' 
    }

    onChangeName = ( newName ) => {
        this.setState({ name: newName })
    }

    onPress = () => {
        this.props.navigation.navigate('Chat', { name: this.state.name });
    }

    render() {
        return (
            <View>
              <Text style = { styles.title }>Enter your name:</Text>   
              <TextInput
                onChangeText = { ( name ) => this.onChangeName(name) }
                style = { styles.nameInput }
                value = { this.state.name }
                placeholder = "John Cena"
              />
              <TouchableOpacity onPress={this.onPress}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          );
  }
}

const offset = 24;
const styles = StyleSheet.create({
  nameInput: { 
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  buttonText: { 
    marginLeft: offset,
    fontSize: offset,
  },
});

export default Main;