import React, { Component } from 'react';
import { TextInput, Animated, StyleSheet, Text, SafeAreaView, ScrollView, Dimensions, Image, Platform, StatusBar, WebView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { View, Button } from 'native-base';
import StarRating from 'react-native-star-rating'




import ThingsToDo from './ThingsToDo'
import DiscoverNewThings from './DiscoverNewThings'
import Tag from './Tag'
import MyVideo from './MyVideo'

// Here i return a very useful part of my application that takes in input from users and sends it to AI Interpreter
// Secondly, i present tiered help in the first page starting with exciting things to do, connections and mental health resources 
const {height,width} = Dimensions.get('window')

export default class AITextInput extends Component {

//   constructor(props){
//     super(props)
//     this.state = {text:'I want to go to the AI model'}

//   }


// onChangeText =(text) => {
//   this.setState({text})
// }


//     componentWillMount(){
//       this.scrollY = new Animated.Value(0)
//       this.startHeaderHeight = 80
//       if(Platform.OS=='android'){
//         this.startHeaderHeight = 100 + StatusBar.currentHeight
//       }
//     }
  
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
          
                      <ScrollView horizontal={true}
                      showsHorizontalScrollIndicator={false}>
                        <ThingsToDo imageUri = {require('/Users/chege/Desktop/Tribe/panicfromscratch/assets/4.jpg')}
                        name='StarGazing Tribe' screenName="Details"/>
                        <ThingsToDo imageUri = {require('/Users/chege/Desktop/Tribe/panicfromscratch/assets/3.png')}
                        name='Science Fiction Tribe' />
                        <ThingsToDo imageUri = {require('/Users/chege/Desktop/Tribe/panicfromscratch/assets/experiences.jpg')}
                        name='Polo Tribe' />
                        <ThingsToDo imageUri = {require('/Users/chege/Desktop/Tribe/panicfromscratch/assets/4.jpg')}
                        name='Bird Watching Tribe' />
                        <ThingsToDo imageUri = {require('/Users/chege/Desktop/Tribe/panicfromscratch/assets/3.png')}
                        name='Mediation Tribe' />
                        <ThingsToDo imageUri = {require('/Users/chege/Desktop/Tribe/panicfromscratch/assets/experiences.jpg')}
                        name='Whisky Tribe' />
                      </ScrollView>
          </View> 
          <View style={{marginTop:10, paddingBottom: 20, backgroundColor: 'white'}}>
                      <Text style={{marginTop:30, fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                       Your Public Tribes
                      </Text>
                      <Text style={{fontWeight: '100', marginTop: 5, paddingHorizontal: 20, paddingBottom: 20}}>
                        Meet your People
                      </Text>
          
                      <ScrollView horizontal={true}
                      showsHorizontalScrollIndicator={false}>
                        <ThingsToDo imageUri = {require('/Users/chege/Desktop/Tribe/panicfromscratch/assets/4.jpg')}
                        name='StarGazing Tribe' />
                        <ThingsToDo imageUri = {require('/Users/chege/Desktop/Tribe/panicfromscratch/assets/3.png')}
                        name='Science Fiction Tribe' />
                        <ThingsToDo imageUri = {require('/Users/chege/Desktop/Tribe/panicfromscratch/assets/experiences.jpg')}
                        name='Polo Tribe' />
                        <ThingsToDo imageUri = {require('/Users/chege/Desktop/Tribe/panicfromscratch/assets/4.jpg')}
                        name='Bird Watching Tribe' />
                        <ThingsToDo imageUri = {require('/Users/chege/Desktop/Tribe/panicfromscratch/assets/3.png')}
                        name='Mediation Tribe' />
                        <ThingsToDo imageUri = {require('/Users/chege/Desktop/Tribe/panicfromscratch/assets/experiences.jpg')}
                        name='Whisky Tribe' />
                      </ScrollView>
          </View> 
          <View style={{marginTop:10, paddingBottom: 20, backgroundColor: 'white'}}>
                      <Text style={{marginTop:30, fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                       Recommended Tribes
                      </Text>
                      <Text style={{fontWeight: '100', marginTop: 5, paddingHorizontal: 20, paddingBottom: 20}}>
                        Meet your People - Use AI model for recommendation
                      </Text>
          
                      <ScrollView horizontal={true}
                      showsHorizontalScrollIndicator={false}>
                        <ThingsToDo imageUri = {require('/Users/chege/Desktop/Tribe/panicfromscratch/assets/4.jpg')}
                        name='StarGazing Tribe' />
                        
                        <ThingsToDo imageUri = {require('/Users/chege/Desktop/Tribe/panicfromscratch/assets/experiences.jpg')}
                        name='Polo Tribe' />
                        <ThingsToDo imageUri = {require('/Users/chege/Desktop/Tribe/panicfromscratch/assets/4.jpg')}
                        name='Bird Watching Tribe' />
                       
                        <ThingsToDo imageUri = {require('/Users/chege/Desktop/Tribe/panicfromscratch/assets/experiences.jpg')}
                        name='Whisky Tribe' />
                      </ScrollView>
          </View> 
            
                
                <View style={{marginTop: 10, backgroundColor: 'white', paddingBottom: 20}}>
                          <Text style={{marginTop:30, fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                        Discover Tribes 
                          </Text>
                          <Text style={{fontWeight: '100', marginTop: 5, paddingHorizontal: 20}}>
                      Trending Tribes 
                      </Text>
                          <View style= {{paddingHorizontal:20, marginTop: 20, flexDirection:'row',flexWrap:'wrap', justifyContent:'space-between'}} >
                            <DiscoverNewThings width={width}
                              name='Yoga with Miriam'
                              type='Eastern Healing'
                              price={82}
                              rating={5}

                            />
                            <DiscoverNewThings width={width}
                            name='Astrology with Ben Pol'
                            type='Metaphysics'
                            price={20}
                            rating={1}
                            />
                            <DiscoverNewThings width={width}
                            name='Burlington Tour with Ann'
                            type='Bonding Tour'
                            price={45}
                            rating={4}
                            />
                          <DiscoverNewThings width={width}
                            name='Meditation with the Meditation Medusa'
                            type='Eastern Meditation'
                            price={15}
                            rating={5}
                            />
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