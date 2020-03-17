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




export default function ServiceFeed() {

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
            <CardItem >
              <Left>
              <Button>
            <Text>Click Me!</Text>
          </Button>
              </Left>
              
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
