import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeActivity} />
        <Stack.Screen name="Restaurant" component={ResturantActivity} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation