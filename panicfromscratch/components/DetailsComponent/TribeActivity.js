// import React from 'react';
// import {
//   FlatList,
//   Text,
//   View,
//   TouchableHighlight,
//   Image
// } from 'react-native';
// import styles from './styles';
// import { getRecipes, getCategoryName } from '../data/MockDataAPI';
// import { useNavigation } from '@react-navigation/native';


// export default function TribeActivity() {

//   const navigation = useNavigation();

//   onPressRecipe = item => {
//     navigation.navigate('Recipe', { item });
//   };

//   renderRecipes = ({ item }) => (
//     <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressRecipe(item)}>
//       <View style={styles.container}>
//         <Image style={styles.photo} source={{ uri: item.photo_url }} />
//         <Text style={styles.title}>{item.title}</Text>
//         <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
//       </View>
//     </TouchableHighlight>
//   );

//   render() {
//     const { navigation } = this.props;
//     const item = navigation.setParams('category');
//     const recipesArray = getRecipes(item.id);
//     return (
//       <View>
//         <FlatList
//           vertical
//           showsVerticalScrollIndicator={false}
//           numColumns={2}
//           data={recipesArray}
//           renderItem={this.renderRecipes}
//           keyExtractor={item => `${item.recipeId}`}
//         />
//       </View>
//     );
//   }
// }
