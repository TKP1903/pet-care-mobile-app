import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen1 from './frontend/src/components/WelcomeScreen1';
import WelcomeScreen2 from './frontend/src/components/WelcomeScreen2';
import WelcomeScreen3 from './frontend/src/components/WelcomeScreen3';
import Registration from './frontend/src/components/Registration';
import Home from './frontend/src/components/Home';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* Add children property here */}
      <Stack.Navigator>
      <Stack.Screen 
          name="WelcomeScreen1" 
          component={WelcomeScreen1} 
          options={{ headerShown: false }} // hide header for this screen
        />
      <Stack.Screen 
          name="WelcomeScreen2" 
          component={WelcomeScreen2} 
          options={{ headerShown: false }} // hide header for this screen
        />

      <Stack.Screen 
          name="WelcomeScreen3" 
          component={WelcomeScreen3} 
          options={{ headerShown: false }} // hide header for this screen
        />

      <Stack.Screen 
          name="Registration" 
          component={Registration} 
          options={{ headerShown: false }} // hide header for this screen
        />

      <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }} // hide header for this screen
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
