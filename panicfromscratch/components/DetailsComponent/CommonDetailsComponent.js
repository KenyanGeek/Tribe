import React, { Component } from 'react'
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native'

import DetailsImageComponent from './DetailsImageComponent'
import MyVideo from '../HomeScreenComponents/MyVideo'
import ThingsToDo from '../HomeScreenComponents/ThingsToDo'


export default class CommonDetailsComponent extends Component {
  render() {
    return (
        <ScrollView>
      <View style={{marginTop:10, paddingHorizontal: 20, backgroundColor:'white', paddingBottom: 20}}>
                      <Text style={{marginTop:30, fontSize: 24, fontWeight: '700'}}>
                        Contibute to this.Tribe
                      </Text>
                      <Text style={{fontWeight: '100', marginTop: 5}}>
                        Contribute to Tribe
                      </Text>
                      <View style={{width:40,height:200,marginTop:20}}>
                      </View>
                      
                      
      </View>    
      <View style={{marginTop:10, paddingHorizontal: 20, backgroundColor:'white', paddingBottom: 20}}>
                      <Text style={{marginTop:30, fontSize: 24, fontWeight: '700'}}>
                        Invited Tribes
                      </Text>
                      <Text style={{fontWeight: '100', marginTop: 5}}>
                        Look at your tribe recommendations - will be moved to inside posts from tribes
                      </Text>
                      <View style={{width:40,height:200,marginTop:20}}>
                        <Image 
                        style={{flex: 1,height:null,width:null, resizeMode:'cover',borderRadius: 5, borderWidth: 1, borderColor:'#dddddd' }}
                        source={require('/Users/chege/Desktop/2020 react apps/Panic-Button/panicfromscratch/assets/8.png')}
                        />

                      </View>
                      
          </View>             
      <View style={{marginTop:30, paddingHorizontal: 20, paddingBottom: 30, backgroundColor: 'white'}}>
                      <Text style = {{marginTop:30, fontSize: 24, fontWeight: '700'}}>
                        Posts from this.tribe
                      </Text>
                      <Text style = {{fontWeight: '100', marginTop: 5}}>
                        Here we will have a scroll view newsfeed with posts
                      </Text>
                      <View style = {{width:200,height:200,marginTop:20}}>
                        <MyVideo source = {{uri:'https://www.youtube.com/watch?v=dTfyrfnwouE'}}/>
                      </View>
                      
          </View> 
          
          {/* Code below here can be used for monetization but not now */}
          
                    {/* <View style={{marginTop: 10, paddingBottom: 20, backgroundColor: 'white'}}>
                      <Text style={{marginTop:30, fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                      Recommended Activities for your this.tribe
                      </Text>
                      <Text style={{fontWeight: '100', marginTop: 5, paddingHorizontal: 20, paddingBottom: 20}}>
                      Find some exciting things tribes are doing near you
                      </Text>
          
                      <ScrollView horizontal={true}
                      showsHorizontalScrollIndicator={false}>
                        <ThingsToDo imageUri = {require('/Users/chege/Desktop/2020 react apps/Panic-Button/panicfromscratch/assets/1.jpg')}
                        name='Watch Dark Knight' />
                        <ThingsToDo imageUri = {require('/Users/chege/Desktop/2020 react apps/Panic-Button/panicfromscratch/assets/2.jpg')}
                        name='Watch a Sequel of Mogri' />
                        <ThingsToDo imageUri = {require('/Users/chege/Desktop/2020 react apps/Panic-Button/panicfromscratch/assets/11.jpg')}
                        name='Watch Boxing at the Flynn Theatre' />
                        <ThingsToDo imageUri = {require('/Users/chege/Desktop/2020 react apps/Panic-Button/panicfromscratch/assets/5.jpg')}
                        name='Inspiration week by Immigrants in Essex' />
                        <ThingsToDo imageUri = {require('/Users/chege/Desktop/2020 react apps/Panic-Button/panicfromscratch/assets/7.jpg')}
                        name='Fight Club First Event' />
                        <ThingsToDo imageUri = {require('/Users/chege/Desktop/2020 react apps/Panic-Button/panicfromscratch/assets/9.jpg')}
                        name='Jared Leto inspiration Talk' />
                      </ScrollView>
          </View>              */}
      </ScrollView>    
      )
  }
}

