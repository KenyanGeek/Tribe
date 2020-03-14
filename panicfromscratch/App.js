import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons/';



// Stack route screens
import HomeScreen from './screens/BottomTab/HomeScreen';
import TribeActivity from './components/DetailsComponent/TribeActivity/TribeActivity'
import Activity from './components/DetailsComponent/Activities/Activity'

// Tab screens
import Add from './screens/BottomTab/Add';
import Profile from './screens/BottomTab/Profile';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();




function FirstOnStack() {
      return (
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="TribeActivity" component={TribeActivity} />
          <Stack.Screen name="Activity" component={Activity} />

        </Stack.Navigator>
      );
    }
    
    function App() {
      return (
            <NavigationContainer>
    
      
    <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused
                    ? 'ios-home'
                    : 'ios-home';
                } else if (route.name === 'Mood') {
                  iconName = focused ? 'ios-happy' : 'ios-happy';
                } else if (route.name === 'Add') {
                  iconName = focused ? 'ios-add-circle' : 'ios-add-circle';
                } else if (route.name === 'Profile') {
                  iconName = focused ? 'md-person' : 'md-person';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
            
    >
        <Tab.Screen name="Home" component={FirstOnStack} />
        <Tab.Screen name="Add" component={Add} />
        <Tab.Screen name="Profile" component={Profile} />
        
</Tab.Navigator>
  </NavigationContainer>
      );
    }

export default App;


