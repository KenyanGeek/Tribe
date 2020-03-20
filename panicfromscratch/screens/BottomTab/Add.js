

import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Profile from '../BottomTab/Profile';
import CommunityFeed from '../../components/DetailsComponent/TribeActivity/Feed/CommunityFeed'
import LearningFeed from '../../components/DetailsComponent/TribeActivity/Understanding/LearningFeed'
import ServiceFeed from '../../components/DetailsComponent/TribeActivity/Business/ServiceFeed'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const TopTab = createMaterialTopTabNavigator();

export default function Add() {
  return (
    <TopTab.Navigator
      initialRouteName="CommunityFeed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: 'powderblue' },
      }}
    >
      <TopTab.Screen
        name="CommunityFeed"
        component={CommunityFeed}
        options={{ tabBarLabel: 'Home' }}
      />
      <TopTab.Screen
        name="LearningFeed"
        component={LearningFeed}
        options={{ tabBarLabel: 'Updates' }}
      />
      <TopTab.Screen
        name="ServiceFeed"
        component={ServiceFeed}
        options={{ tabBarLabel: 'Profile' }}
      />
    </TopTab.Navigator>
  );
}