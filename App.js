import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Main from './Main';
import Chat from './Chat';

const Drawer = createDrawerNavigator();


export default class App extends React.Component {

  render() {
    return (
      
      <NavigationContainer>

        <Drawer.Navigator>

          <Drawer.Screen 
            name = "Main" 
            component = {Main}
          />

          <Drawer.Screen 
            name = "Chat" 
            component = {Chat} 
          />        
        
        </Drawer.Navigator>
        
      </NavigationContainer>
    );
  }
}
