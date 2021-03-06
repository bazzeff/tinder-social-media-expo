import React from "react";
import { Provider } from 'react-native-paper'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { PRIMARY_COLOR, DARK_GRAY, BLACK, WHITE } from "./assets/styles"; 

import { theme } from './src/core/theme'
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
} from './src/screens' 
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => (
  
  <Provider theme={theme}>
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}
    >
     <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
</Provider>
);

export default App;
