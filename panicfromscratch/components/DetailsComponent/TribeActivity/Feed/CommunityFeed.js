import React from 'react';
import {
  FlatList,

  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from '../../../HomeScreenComponents/Tribes/styles';
import { tribes } from '../../../data/dataArrays';
import { getNumberOfActivities } from '../../../data/MockDataAPI';
import { useNavigation } from '@react-navigation/native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';




export default function TribesComponent() {

  const navigation = useNavigation();

  onPressTribe = item => {
    const tribedata = item;
    navigation.navigate("TribeActivity", {tribedata});
  };
  
  renderTribe = ({ item }) => (
        // <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressTribe(item)}>
        //   <View style={styles.tribeItemContainer}>
        //     <Image style={styles.tribePhoto} source={{ uri: item.photo_url }} /> 
        //     <Text style={styles.tribeName}>{item.name} Tribe </Text>
        //     <Text style={styles.tribeInfo}>{getNumberOfActivities(item.id)} Activities ongoing for {item.name} </Text>
        //   </View>
        // </TouchableHighlight>
        <Container>
        
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>{item.name}</Text>
                  <Text note>{item.name}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{ uri: item.photo_url }} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
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
      </Container>
      );


      
  
  return (
    <View>
        <FlatList
          data={tribes}
          renderItem={this.renderTribe}
          keyExtractor={item => `${item.id}`}
        />
      </View>
  );

  }
