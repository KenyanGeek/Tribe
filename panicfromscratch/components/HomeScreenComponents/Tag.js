import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Tag extends Component {
  render() {
    return (
        <View style={{minHeight:20, minWidth: 40, padding:5, backgroundColor:'white'
        ,borderColor:'#dddddd',borderWidth:2, borderRadius:5, marginRight:3, }}>
                <Text style={{fontWeight: '800', fontSize: 10}}> {this.props.name} </Text>
          </View>
    )
  }
}