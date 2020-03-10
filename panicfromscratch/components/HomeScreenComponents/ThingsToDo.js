import React, { Component } from 'react'
import { Text, View, Button, Image,StyleSheet, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native'
import { useNavigation } from '@react-navigation/native';




function ThingsToDo({screenName}) {
  const navigation = useNavigation();

  return (
    <Button
    title={`Go to ${screenName}`}
    onPress={() => navigation.navigate(screenName)}
    />
//     <TouchableHighlight underlayColor="white">

//     <View style={{height:200, width: 200, marginLeft: 20, borderWidth:1, borderRadius: 5, borderColor: "#dddddd"}}>
//     <View style={{flex: 3}}>
//       <Image source={this.props.imageUri} style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}/>
//     </View>
//     <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
//       <Text>
//         {this.props.name}
//       </Text>
//     </View>
//     <View style={styles.container}>
 

// </View>
// </View>
// </TouchableHighlight>
  );
}

export default ThingsToDo;
