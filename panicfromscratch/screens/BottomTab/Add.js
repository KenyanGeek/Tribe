

import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Profile from '../BottomTab/Profile';
import CommunityFeed from '../../components/DetailsComponent/TribeActivity/Feed/CommunityFeed'
import LearningFeed from '../../components/DetailsComponent/TribeActivity/Understanding/LearningFeed'
import ServiceFeed from '../../components/DetailsComponent/TribeActivity/Business/ServiceFeed'


export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="Community Chat">
            <CommunityFeed />
          </Tab>
          <Tab heading="Learning">
          <LearningFeed/>
          </Tab>
          <Tab heading="Services">
          <ServiceFeed />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}