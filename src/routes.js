import * as React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/SIgnIn';
import SignUp from './pages/SIgnUp';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer initialRouteName="SignIn">
      <Stack.Navigator>
        <Stack.Screen
          name="Sign In"
          component={SignIn}
        />

        <Stack.Screen
          name="Sign Up"
          component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;
