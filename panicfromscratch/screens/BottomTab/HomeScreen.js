import React, { Component } from 'react';
import { Animated, StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';
import { View } from 'native-base';

import TribesComponent from '../../components/HomeScreenComponents/Tribes/TribesComponent'
import RecommendedTribesComponent from '../../components/HomeScreenComponents/Tribes/RecommendedTribesComponent'
import DiscoverNewThings from '../../components/HomeScreenComponents/DiscoverNewThings'




export default function HomeScreen() {




  return (
    <SafeAreaView style={{flex:1}}>

      <ScrollView  style={styles.scrollView} >
        <View style={{marginTop:10, paddingBottom: 10, backgroundColor: 'white'}}>
        <Text style={{marginTop:10, fontSize: 48, fontWeight: '700', paddingHorizontal: 20}}>
                        Tribe 
                          </Text>
        </View> 

        <View style={{marginTop:10, paddingBottom: 20, backgroundColor: 'white'}}>
                      <Text style={{marginTop:30, fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                        Your Tribes
                      </Text>
                      <Text style={{fontWeight: '100', marginTop: 5, paddingHorizontal: 20, paddingBottom: 20}}>
                        Meet your People
                      </Text>
          
                      
                        <TribesComponent />
                        
          </View> 
       
       
          <View style={{marginTop:10, paddingBottom: 20, backgroundColor: 'white'}}>
                      <Text style={{marginTop:30, fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                       Recommended Tribes
                      </Text>
                      <Text style={{fontWeight: '100', marginTop: 5, paddingHorizontal: 20, paddingBottom: 20}}>
                        Meet your People - Use AI model for recommendation
                      </Text>
          
                      <RecommendedTribesComponent />

          </View> 
            
                
                <View style={{marginTop: 10, backgroundColor: 'white', paddingBottom: 20}}>
                          <Text style={{marginTop:30, fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                        Discover Tribes 
                          </Text>
                          <Text style={{fontWeight: '100', marginTop: 5, paddingHorizontal: 20}}>
                      Trending Tribes 
                      </Text>
                          <View style= {{paddingHorizontal:20, marginTop: 20, flexDirection:'row',flexWrap:'wrap', justifyContent:'space-between'}} >
                            
                            <ScrollView horizontal={true}
                      showsHorizontalScrollIndicator={false}>
                        <DiscoverNewThings />
                      </ScrollView>
                          </View>                          
          </View>      
      </ScrollView>
      </SafeAreaView>     
     )};
 
     const styles = StyleSheet.create({
      
      scrollView: {
        backgroundColor: '#EBEFF2',
      
      },
      
    });