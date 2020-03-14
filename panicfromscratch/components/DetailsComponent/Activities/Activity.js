import React from 'react';
import {FlatList,ScrollView,Text,View,TouchableOpacity,Image,Dimensions,TouchableHighlight} from 'react-native';
import styles from './styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { getIngredientName, getTribeName, getTribeById } from '../../data/MockDataAPI';
import BackButton from '../../BackButton/BackButton';
import ViewIngredientsButton from '../../ViewIngredientsButton/ViewIngredientsButton';


// export default class RecipeScreen extends React.Component {
//   static navigationOptions = ({ navigation }) => {
//     return {
//       headerTransparent: 'true',
//       headerLeft: (
//         <BackButton
//           onPress={() => {
//             navigation.goBack();
//           }}
//         />
//       )
//     };
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       activeSlide: 0
//     };
//   }

//   renderImage = ({ item }) => (
//     <TouchableHighlight>
//       <View style={styles.imageContainer}>
//         <Image style={styles.image} source={{ uri: item }} />
//       </View>
//     </TouchableHighlight>
//   );

//   onPressIngredient = item => {
//     var name = getIngredientName(item);
//     let ingredient = item;
//     this.props.navigation.navigate('Ingredient', { ingredient, name });
//   };

//   render() {
//     const { activeSlide } = this.state;
//     const { navigation } = this.props;
//     const item = navigation.getParam('item');
//     const tribe = getTribeById(item.tribeId);
//     const title = getTribeName(tribe.id);

//     return (
//       <ScrollView style={styles.container}>
//         <View style={styles.carouselContainer}>
//           <View style={styles.carousel}>
//             <Carousel
//               ref={c => {
//                 this.slider1Ref = c;
//               }}
//               data={item.photosArray}
//               renderItem={this.renderImage}
//               sliderWidth={viewportWidth}
//               itemWidth={viewportWidth}
//               inactiveSlideScale={1}
//               inactiveSlideOpacity={1}
//               firstItem={0}
//               loop={false}
//               autoplay={false}
//               autoplayDelay={500}
//               autoplayInterval={3000}
//               onSnapToItem={index => this.setState({ activeSlide: index })}
//             />
//             <Pagination
//               dotsLength={item.photosArray.length}
//               activeDotIndex={activeSlide}
//               containerStyle={styles.paginationContainer}
//               dotColor="rgba(255, 255, 255, 0.92)"
//               dotStyle={styles.paginationDot}
//               inactiveDotColor="white"
//               inactiveDotOpacity={0.4}
//               inactiveDotScale={0.6}
//               carouselRef={this.slider1Ref}
//               tappableDots={!!this.slider1Ref}
//             />
//           </View>
//         </View>
//         <View style={styles.infoRecipeContainer}>
//           <Text style={styles.infoRecipeName}>{item.title}</Text>
//           <View style={styles.infoContainer}>
//             <TouchableHighlight
//               onPress={() => navigation.navigate('RecipesList', { tribe, title })}
//             >
//               <Text style={styles.tribe}>{getTribeName(item.tribeId).toUpperCase()}</Text>
//             </TouchableHighlight>
//           </View>

//           <View style={styles.infoContainer}>
//             <Image style={styles.infoPhoto} source={require('../../../assets/time.png')} />
//             <Text style={styles.infoRecipe}>{item.time} minutes </Text>
//           </View>

//           <View style={styles.infoContainer}>
//             <ViewIngredientsButton
//               onPress={() => {
//                 let ingredients = item.ingredients;
//                 let title = 'Ingredients for ' + item.title;
//                 navigation.navigate('IngredientsDetails', { ingredients, title });
//               }}
//             />
//           </View>
//           <View style={styles.infoContainer}>
//             <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
//           </View>
//         </View>
//       </ScrollView>
//     );
//   }
// }
const { width: viewportWidth } = Dimensions.get('window');

export default function Activity({ route, navigation }) {
    // static navigationOptions = ({ navigation }) => {
    //   return {
    //     headerTransparent: 'true',
    //     headerLeft: (
    //       <BackButton
    //         onPress={() => {
    //           navigation.goBack();
    //         }}
    //       />
    //     )
    //   };
    // };
const { item } = route.params;
const tribe = getTribeById(item.tribeId);
const title = getTribeName(tribe.id);
    // constructor(props) {
    //   super(props);
      this.state = {
        activeSlide: 0
      };
    // }
  
    renderImage = ({ item }) => (
      <TouchableHighlight>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: item }} />
        </View>
      </TouchableHighlight>
    );
  
    onPressIngredient = item => {
      var name = getIngredientName(item);
      let ingredient = item;
      this.props.navigation.navigate('Ingredient', { ingredient, name });
    };
  
      const { activeSlide } = this.state;
    //   const { navigation } = this.props;
    //   const item = navigation.getParam('item');
     
  
      return (
        <ScrollView style={styles.container}>
          <View style={styles.carouselContainer}>
            <View style={styles.carousel}>
              <Carousel
                ref={c => {
                  this.slider1Ref = c;
                }}
                data={item.photosArray}
                renderItem={this.renderImage}
                sliderWidth={viewportWidth}
                itemWidth={viewportWidth}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                firstItem={0}
                loop={false}
                autoplay={false}
                autoplayDelay={500}
                autoplayInterval={3000}
                onSnapToItem={index => this.setState({ activeSlide: index })}
              />
              <Pagination
                dotsLength={item.photosArray.length}
                activeDotIndex={activeSlide}
                containerStyle={styles.paginationContainer}
                dotColor="rgba(255, 255, 255, 0.92)"
                dotStyle={styles.paginationDot}
                inactiveDotColor="white"
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                carouselRef={this.slider1Ref}
                tappableDots={!!this.slider1Ref}
              />
            </View>
          </View>
          <View style={styles.infoRecipeContainer}>
            <Text style={styles.infoRecipeName}>{item.title}</Text>
            <View style={styles.infoContainer}>
              <TouchableHighlight
                onPress={() => navigation.navigate('Add', { tribe, title })}
              >
                <Text style={styles.tribe}>{getTribeName(item.tribeId).toUpperCase()}</Text>
              </TouchableHighlight>
            </View>
  
            <View style={styles.infoContainer}>
              <Image style={styles.infoPhoto} source={require('../../../assets/time.png')} />
              <Text style={styles.infoRecipe}>{item.time} minutes </Text>
            </View>
  
            <View style={styles.infoContainer}>
              <ViewIngredientsButton
                onPress={() => {
                  let ingredients = item.ingredients;
                  let title = 'Ingredients for ' + item.title;
                  navigation.navigate('IngredientsDetails', { ingredients, title });
                }}
              />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
            </View>
          </View>
        </ScrollView>
      );
    }
  
  