import React, { PureComponent } from 'react'
import { Text, View, StyleSheet,TouchableOpacity,Image, FlatList, ActivityIndicator} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import StarRating from 'react-native-star-rating'



export default class DiscoverNewThings extends PureComponent {
    constructor(props){
      super(props)
      this.state = {
         items: []
      }
    }
  
    componentDidMount(){
      this.getDataFromApi()
    }
  
    getDataFromApi = async () => {
      const endpoint = 'https://jsonplaceholder.typicode.com/photos'
      const res = await fetch(endpoint)
      const data = await res.json()
      this.setState({items: data})
    }
  
    _renderItem = ({item, index}) => {
      // let {cardText, card, cardImage} = StyleSheet
  
      return(
  
 <TouchableOpacity style={{height:200, width: 200, marginLeft: 20, borderWidth:1, borderRadius: 5, borderColor: "#dddddd"}} >
                        <View style={{flex: 2}}>
                          <Image source={{uri: item.url}} style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}/>
                        </View>
                        <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
                          <View style= {{flex: 1, alignItems: 'flex-start', paddingLeft: 10, paddingBottom: 10, justifyContent: 'space-evenly'}}>
                    <Text style={{fontSize: 10,color: '#b63838'}}>Party</Text>
                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>{item.title}</Text>
                    <Text style={{fontSize: 10}}> 10 $</Text>
                    <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={4}
                        starSize={10}
                    />
                  </View>
  
                    </View>
        </TouchableOpacity>
      )
    }
  
    render() {
      // let {container, loader} = styles
      let {items} = this.state
      if (items.length === 0){
        return(
          // <View style = {loader}>
          <View >
            <ActivityIndicator size = 'large'/>
          </View>
        )
      }
      
  return (
    <FlatList
     data={items}
     keyExtractor ={(items, index) => index.toString()}
     renderItem = {this._renderItem}
     horizontal={true} />
  )
  
    }
  }