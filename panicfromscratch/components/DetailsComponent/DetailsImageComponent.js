import React, { Component } from 'react'
import { SafeAreaView, Text, View, ScrollView, Image, StyleSheet, Dimensions, FlatList} from 'react-native'
import MapView from 'react-native-maps';

import StarRating from 'react-native-star-rating'




export default class CommonDetailsComponent extends Component {
  render() {
    return (
        <View >
                <View style={styles.container}>
                        <Image 
                        resizeMode="contain"
                        style={styles.image}
                        source={this.props.imageUri} 
                        />  
                                
                </View>
                <View style={{ paddingTop:30, paddingHorizontal: 10}}>
                            <View >
                                            <Text style={{fontSize: 24, fontWeight: '700'}}>
                                                {this.props.name}
                                            </Text>
                                            <Text style={{fontWeight: '100', marginTop: 5}}>
                                                {this.props.details}
                                            </Text>                
                                </View>
                            <View style={{ marginRight: 280, paddingTop: 10}}>
                            <StarRating
                                            disabled={true}
                                            maxStars={5}
                                            rating={this.props.rating}
                                            starSize={15}
                                        /> 
                            </View>
                </View> 
                            <View style={styles.mapcontainer}>
                                    <MapView style={styles.mapStyle} />
                            </View>
                            
      
          </View>   
         )
  }
}


const styles = StyleSheet.create({
    container: {
      paddingTop:40,
      width: 377,
      height: 280
    },
    image: {
      paddingTop:40,
      width: 377,
      height: 280
    },
    mapcontainer: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      mapStyle: {
        width: Dimensions.get('window').width,
        height: 150,
      },
      contactstyle: {
        fontSize: 24, 
        fontWeight: '700'
      },

      
  });