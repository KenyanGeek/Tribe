import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import { categories } from '../data/dataArrays';
import { getNumberOfRecipes } from '../data/MockDataAPI';
import { useNavigation } from '@react-navigation/native';




export default function HomeScreen() {

  const navigation = useNavigation();

  onPressCategory = item => {
    const title = item.name;
    const category = item;
    navigation.navigate("Add", { category, title });
  };
  
  renderCategory = ({ item }) => (
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressCategory(item)}>
          <View style={styles.categoriesItemContainer}>
            <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} /> 
            <Text style={styles.categoriesName}>{item.name} Tribe </Text>
            <Text style={styles.categoriesInfo}>{getNumberOfRecipes(item.id)} recipes</Text>
          </View>
        </TouchableHighlight>
      );

  
  return (
    <View>
        <FlatList
          data={categories}
          renderItem={this.renderCategory}
          keyExtractor={item => `${item.id}`}
          horizontal={true}
        />
      </View>
  );

  }
