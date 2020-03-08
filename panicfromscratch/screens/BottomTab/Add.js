import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';





export default function Add ({navigation}) {
  return (
    // Try removing the `flex: 1` on the parent View.
    // The parent will not have dimensions, so the children can't expand.
    // What if you add `height: 300` instead of `flex: 1`?
<View style={styles.container}>
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>

    
<View style={{marginTop:10, paddingHorizontal: 20, backgroundColor:'white', paddingBottom: 20}}>
                      <Text style={{marginTop:30, fontSize: 24, fontWeight: '700'}}>
                        Add a Tribe
                      </Text>
                      <Text style={{fontWeight: '100', marginTop: 5}}>
                        Here we will add private or public tribe and invite friends to join
                      </Text>
                      <View style={{width:40,height:200,marginTop:20}}>
                        <Image 
                        style={{flex: 1,height:200,width:330, resizeMode:'cover',borderRadius: 5, borderWidth: 1, borderColor:'#dddddd' }}
                        source={require('/Users/chege/Desktop/2020 react apps/Panic-Button/panicfromscratch/assets/8.png')}
                        />

                      </View>
                      
          </View>   




    
 </ScrollView>
  </View>
      
  )};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    developmentModeText: {
      marginBottom: 20,
      color: 'rgba(0,0,0,0.4)',
      fontSize: 14,
      lineHeight: 19,
      textAlign: 'center',
    },
    contentContainer: {
      paddingTop: 30,
    },
    buttonStyle: {
      color: '#f194ff',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      margin: 20
    },
    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
    homeScreenFilename: {
      marginVertical: 7,
    },
    codeHighlightText: {
      color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: 13,
      paddingHorizontal: 13,
    },
    getStartedText: {
      fontSize: 24,
      color: 'rgba(0,0,0,1)',
      lineHeight: 24,
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 20
    },
    tabBarInfoContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }),
      alignItems: 'center',
      backgroundColor: '#fbfbfb',
      paddingVertical: 20,
    },
    tabBarInfoText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      textAlign: 'center',
    },
    navigationFilename: {
      marginTop: 5,
    },
    helpContainer: {
      marginTop: 15,
      alignItems: 'center',
    },
    helpLink: {
      paddingVertical: 15,
    },
    helpLinkText: {
      fontSize: 14,
      color: '#2e78b7',
    },
  });


