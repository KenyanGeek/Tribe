import WebView from 'react-native-webview'

import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'

export default class MyVideo extends Component {
  render() {
    return (
      <WebView
      
      style={ styles.WebViewContainer }
      javaScriptEnabled={true}
      domStorageEnabled={true}
      source={{
        html: `
        <video width="100%" height="100%" controls>
            <source src="${this.props.source}" type="video/mp4">
        </video>
        `,}}/>
      
    )
  }
}

const styles = StyleSheet.create({

  WebViewContainer: {
  
      marginTop: (Platform.OS == 'android') ? 20 : 0,
  
    }
    
  });