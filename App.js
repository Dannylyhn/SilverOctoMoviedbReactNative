import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import 'react-native-gesture-handler';
import DetailsScreen from './DetailsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginForm from './LoginScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import NewsScreen from './NewsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Popular Movies" component={HomeScreen} 
      options={{
        tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name='home' color={color} size={size}/>)
      }} />
      <Tab.Screen name="News" component={NewsScreen} 
      options={{
        tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name='newspaper' color={color} size={size}/>)
      }}/>
      <Tab.Screen name="Account" component={LoginForm} 
      options={{
        tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name='account' color={color} size={size}/>)
      }}
      />
    </Tab.Navigator>
  );
}

const MyTheme = {
  dark: false,
  colors: {
    primary: '#000000',
    background: '#ffffff',
    card: 'rgb(255, 255, 255)',
    text: '#000000',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerTitleAlign:'center',}}>
          <Stack.Screen  name="Home" component={Home} options={{title: "SilverOctoMoviebase", headerStyle:{backgroundColor:'#25424f'}, headerTintColor: '#fff'}}/>
          <Stack.Screen name="Details" component={DetailsScreen} options={{title: "Details", headerStyle:{backgroundColor:'#25424f'}, headerTintColor: '#fff'}} />
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}
