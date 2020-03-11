import React, { PureComponent } from 'react'
import { Text, View, StyleSheet,TouchableOpacity,Image, FlatList, ActivityIndicator} from 'react-native'
import { useNavigation } from '@react-navigation/native';




export default class ThingsToDo extends PureComponent {
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
                        <View style={{flex: 3}}>
                          <Image source={{uri: item.url}} style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}/>
                        </View>
                        <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
                          <Text >
                              {item.title}
                        </Text>
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




// function ThingsToDo({screenName}) {
//   const navigation = useNavigation();

//   return (
//     <Button
//     title={`Go to ${screenName}`}
//     onPress={() => navigation.navigate(screenName)}

