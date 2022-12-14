import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Lesson1 from './src/screens/Lesson1';
import ScoreDetails from './src/screens/ScoreDetails';

const Stack = createStackNavigator();

function NavStack() {
  return (
     <Stack.Navigator
        initialRouteName="Lesson1"
        screenOptions=
        {{
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: 'white', },
            
            headerTintColor: '#fff',
            headerTitleStyle :{ fontWeight: 'bold', color: 'black',},
        }}
      >
      <Stack.Screen 
        name="Lesson1" 
        component={Lesson1} 
        options={{ title: 'Lesson 1' }}
      />
      <Stack.Screen 
       name="ScoreDetails" 
       component={ScoreDetails} 
       options={{ title: 'Score Details' }}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}
console.disableYellowBox = true;