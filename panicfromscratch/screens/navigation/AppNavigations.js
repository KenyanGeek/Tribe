import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons/';




import HomeScreen from './screens/BottomTab/HomeScreen';
import Add from './screens/BottomTab/Add';
import Profile from './screens/BottomTab/Profile';
import CommonDetailsComponent from './components/DetailsComponent/CommonDetailsComponent'
import TribeActivity from './components/DetailsComponent/Tribe Activity';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default class App extends Component {
  render() {
    return (
      function FirstOnStack() {
        return (
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="TribeActivity" component={TribeActivity} />
          </Stack.Navigator>
        );
      }
      
      function SecondonStack() {
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
    )
  }
}


import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    TribeActivity: TribeActivity,
    // Recipe: RecipeScreen,
    // RecipesList: RecipesListScreen,
    // Ingredient: IngredientScreen,
    // Search: SearchScreen,
    // IngredientsDetails: IngredientsDetailsScreen
  },
  {
    initialRouteName: 'Home',
    // headerMode: 'float',
    defaulfNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
        fontFamily: 'FallingSkyCond'
      }
    })
  }
);

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 250,
    contentComponent: DrawerContainer
  }
);

export default AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;