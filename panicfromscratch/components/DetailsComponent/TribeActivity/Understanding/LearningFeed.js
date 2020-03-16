import React from 'react';
import {
  FlatList,

  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from '../../../HomeScreenComponents/Tribes/styles';
import { tribes } from '../../../data/dataArrays';
import { useNavigation } from '@react-navigation/native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';




export default function LearningFeed() {

  const navigation = useNavigation();

  onPressTribe = item => {
    const tribedata = item;
    navigation.navigate("TribeActivity", {tribedata});
  };
  
  renderTribe = ({ item }) => (
    <TouchableHighlight style={{ padding: 10, flex: 0.2}}>

        <View >
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>{item.name}</Text>
                  <Text note>{item.name}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{ uri: item.photo_url }} style={{height: 150, width: null}}/>
            </CardItem>
            <CardItem >
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </View>
      </TouchableHighlight>

      );


      
  
  return (
    <View>
        <FlatList
          data={tribes}
          renderItem={this.renderTribe}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{paddingBottom:10}}
        />
      </View>
  );

  }
