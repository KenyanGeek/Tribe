import React, { Component } from 'react';
import { Animated, StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';
import { View } from 'native-base';

import TribesComponent from '../../components/HomeScreenComponents/Tribes/TribesComponent'
import DiscoverNewThings from '../../components/HomeScreenComponents/DiscoverNewThings'




export default class HomeScreen extends Component {

  render() {


  return (
    <SafeAreaView style={{flex:1}}>
              
      {/* <View style={{height:140,paddingTop: 30,backgroundColor:'white',borderBottomWidth:3,borderBottomColor:'#dddddd'}}>
            <View style={{flexDirection:'row', padding: 10, backgroundColor: 'white',marginHorizontal: 20,
                          shadowOffset:{width:0, height:0}, 
                          shadowColor: 'black',
                          shadowOpacity: 0.2, elevation: 1}}>
                    <Icon name="smileo" size={20} color="#dddddd" />
                    <TextInput
                          underlineColorAndroid="transparent"
                          placeholder= "     How do you feel today?"
                          placeholderTextColor = "grey"
                          onChangeText={this.onChangeText}
                          style={{flex:1,fontWeight:'700',backgroundColor: 'white'}}
                          multiline={true}
                          maxLength={40}
                          />
                    
            </View>
            <Animated.View style={{flexDirection:'row', marginHorizontal: 20, position: 'relative', top: 10}}>
                  <Tag name='New'/>
                  <Tag name='Connections'/>
                  <Tag name='Moods'/> 
                  <Tag name='Professional Help'/>
                  <Tag name='Panic Button'/>


            </Animated.View>
      </View> */}

      <ScrollView  scrollEventThrottle ={16}  
      onScroll={Animated.event(
        [
          {nativeEvent:{contentOffset:{y:this.scrollY}}
        }
        ]
      )}
      style={styles.scrollView} >
        <View style={{marginTop:10, paddingBottom: 10, backgroundColor: 'white'}}>
        <Text style={{marginTop:10, fontSize: 48, fontWeight: '700', paddingHorizontal: 20}}>
                        Tribe 
                          </Text>
        </View> 

        <View style={{marginTop:10, paddingBottom: 20, backgroundColor: 'white'}}>
                      <Text style={{marginTop:30, fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                        Your Private Tribes
                      </Text>
                      <Text style={{fontWeight: '100', marginTop: 5, paddingHorizontal: 20, paddingBottom: 20}}>
                        Interact with your inner Circle - have notifications
                      </Text>
          
                      
                        <TribesComponent />
                        
          </View> 
          <View style={{marginTop:10, paddingBottom: 20, backgroundColor: 'white'}}>
                      <Text style={{marginTop:30, fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                       Your Public Tribes
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
          
                      <TribesComponent />

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
     )}};
 
     const styles = StyleSheet.create({
      
      scrollView: {
        backgroundColor: '#EBEFF2',
      
      },
      
    });