import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import { tribes } from '../../data/dataArrays';
import { getNumberOfRecipes } from '../../data/MockDataAPI';
import { useNavigation } from '@react-navigation/native';




export default function TribesComponent() {

  const navigation = useNavigation();

  onPressTribe = item => {
    const title = item.name;
    const tribe = item;
    navigation.navigate("TribeActivity", { tribe, title });
  };
  
  renderTribe = ({ item }) => (
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressTribe(item)}>
          <View style={styles.tribeItemContainer}>
            <Image style={styles.tribePhoto} source={{ uri: item.photo_url }} /> 
            <Text style={styles.tribeName}>{item.name} Tribe </Text>
            <Text style={styles.tribeInfo}>{getNumberOfRecipes(item.id)} recipes</Text>
          </View>
        </TouchableHighlight>
      );

  
  return (
    <View>
        <FlatList
          data={tribes}
          renderItem={this.renderTribe}
          keyExtractor={item => `${item.id}`}
          horizontal={true}
        />
      </View>
  );

  }
