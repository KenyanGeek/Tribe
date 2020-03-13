import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import tribeactivitystyles from './tribeactivitystyles';
import { getRecipes, getTribeName } from '../data/MockDataAPI';
import { useNavigation } from '@react-navigation/native';




export default function TribeActivity() {

  const navigation = useNavigation();

  const item = navigation.setParams(tribe);
  const recipesArray = getRecipes(item.id);

  onPressRecipe = item => {
    navigation.navigate("Add", { item });
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressRecipe(item)}>
      <View style={tribeactivitystyles.container}>
        <Image style={tribeactivitystyles.photo} source={{ uri: item.photo_url }} />
        <Text style={tribeactivitystyles.title}>{item.title}</Text>
        <Text style={tribeactivitystyles.category}>{getTribeName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

   
    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipesArray}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );

  }
