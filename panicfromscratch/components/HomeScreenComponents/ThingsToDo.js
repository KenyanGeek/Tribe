import React, { Component } from 'react'
import { Text, View, Image,StyleSheet, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native'



export default class ThingsToDo extends Component {

  _onPressButton() {
    alert('You tapped the button!')
  }
  
  _onLongPressButton() {
    alert('You long-pressed the button!')
  }

    render() {
        return (
          <TouchableHighlight onPress={this._onPressButton} underlayColor="white">

            <View style={{height:200, width: 200, marginLeft: 20, borderWidth:1, borderRadius: 5, borderColor: "#dddddd"}}>
            <View style={{flex: 3}}>
              <Image source={this.props.imageUri} style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}/>
            </View>
            <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
              <Text>
                {this.props.name}
              </Text>
            </View>
            <View style={styles.container}>
         
        
      </View>
        </View>
        </TouchableHighlight>

        )
    }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignItems: 'center'
  },
  button: {
    marginBottom: 10,
    width: 100,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'white'
  }
});