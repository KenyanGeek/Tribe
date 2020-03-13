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
import { Button, Alert } from 'react-native';



export default function RecommendedTribesComponent () {
  



  renderTribe = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPresstribe(item)}>
      <View style={styles.tribeItemContainer}>
        <Image style={styles.tribePhoto} source={{ uri: item.photo_url }} /> 
        <Text style={styles.tribeName}>{item.name} Tribe </Text>
        <View style={styles.buttonContainer}>
          <Button
          
            title="Press Me"
            color="#841584"
          />
        </View>
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



