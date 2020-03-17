

import React, { Component } from 'react';
import CommunityFeed from '../../../components/DetailsComponent/TribeActivity/Feed/CommunityFeed'
import LearningFeed from '../../../components/DetailsComponent/TribeActivity/Understanding/LearningFeed'
import ServiceFeed from '../../../components/DetailsComponent/TribeActivity/Business/ServiceFeed'
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
 
const FirstRoute = () => (
  <CommunityFeed />
);
 
const SecondRoute = () => (
  <LearningFeed />
);

const ThirdRoute = () => (
  <ServiceFeed />
);
 
const initialLayout = { width: Dimensions.get('window').width };
 
export default function TribeActivity() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Community' },
    { key: 'second', title: 'Learning' },
    { key: 'third', title: 'Services' }

  ]);
 
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,

  });
 
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});