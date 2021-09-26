import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DailyPic from './screens/DailyPic';
import SpaceCrafts from './screens/SpaceCrafts';
import StarMap from './screens/StarMap';
import Homescreen from './screens/Homescreen'

function App(){
  const Stack = createStackNavigator()
  return(
    <NavigationContainer>
       <Stack.Navigator initialRouteName= 'Home' screenOptions= {{headerShown : false}}>
      <Stack.Screen name= 'Home' component= {Homescreen}/>
      <Stack.Screen name= 'Daily' component= {DailyPic}/>
      <Stack.Screen name= 'Space' component= {SpaceCrafts}/>
      <Stack.Screen name= 'Star' component= {StarMap}/>
      </Stack.Navigator>

    </NavigationContainer>
  )
}


export default App