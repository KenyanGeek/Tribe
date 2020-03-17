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
import { Button, Icon } from 'native-base';



export default function RecommendedTribesComponent () {
  



  renderTribe = ({ item }) => (
    
      <View style={styles.tribeItemContainer}>
        <Image style={styles.tribePhoto} source={{ uri: item.photo_url }} /> 
        <Text style={styles.tribeName}>{item.name} Tribe </Text>
        
        <Button iconLeft dark>
            <Icon name='cog' />
            <Text>Settings</Text>
          </Button>

                  </View>
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



