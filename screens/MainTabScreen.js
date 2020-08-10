import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import CommunityScreen from './CommunityScreen';
import ExerScreen from './ExerScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import {
  bg,
  btn_Gradient_up,
  btn_Gradient_down,
} from './Config';

const NotiStack = createStackNavigator();
const HomeStack = createStackNavigator();
const CarStack = createStackNavigator();
const PhoneStack = createStackNavigator();
const ImmStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: '홈',
        tabBarColor: bg,
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen 
      name="Community"
      component={CommunityScreen}
      options={{
        tabBarLabel: '집구해줘',
        tabBarColor: bg,
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Exer"
      component={ExploreScreen}
      options={{
        tabBarLabel: '차구해줘',
        tabBarColor: bg,
        tabBarIcon: ({ color }) => (
          <Icon name="ios-car" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: '폰구해줘',
        tabBarColor: bg,
        tabBarIcon: ({ color }) => (
          <Icon name="ios-phone-portrait" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: '이민도와줘',
        tabBarColor: bg,
        tabBarIcon: ({ color }) => (
          <Icon name="ios-airplane" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: bg,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title: '홈 & 피드',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor={bg} onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </HomeStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: bg,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
      title: '이민도와줘',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor={bg} onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </ProfileStack.Navigator>
);

// const DetailsStackScreen = ({ navigation }) => (
//   <DetailsStack.Navigator screenOptions={{
//     headerStyle: {
//       backgroundColor: '#1f65ff',
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       fontWeight: 'bold'
//     }
//   }}>
//     <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
//       title: '홈 & 피드',
//       headerLeft: () => (
//         <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
//       )
//     }} />
//   </DetailsStack.Navigator>
// );
