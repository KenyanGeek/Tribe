import React from 'react';
import {FlatList,Text,View,TouchableHighlight,Image,SafeAreaView, ScrollView} from 'react-native';
import tribeactivitystyles from './tribeactivitystyles';
import { getActivitys, getTribeName } from '../../data/MockDataAPI';




export default function TribeActivity({ route, navigation }) {

 const { tribedata } = route.params;
   
  const activitysArray = getActivitys(tribedata.id);
  const tribesArray = getTribeName(tribedata.id);


  onPressActivity = item => {
    navigation.navigate("Activity", { item });
  };

  renderFeed = ({ item }) => ( 
      <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressActivity(item)}>
        <View>
        <Text style={tribeactivitystyles.title}>{item.title}</Text>
        <Text style={tribeactivitystyles.category}>{getTribeName(item.categoryId)}</Text>
        </View>
    </TouchableHighlight>      
                        
    
  
  );

  renderLearningResources = ({ item }) => ( 
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressActivity(item)}>
      <View>
      <Text style={tribeactivitystyles.title}>{item.title}</Text>
      <Text style={tribeactivitystyles.category}>{getTribeName(item.categoryId)}</Text>
      </View>
  </TouchableHighlight>      
                      
  

);

renderHelpResources = ({ item }) => ( 
  <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressActivity(item)}>
    <View>
    <Text style={tribeactivitystyles.title}>{item.title}</Text>
    <Text style={tribeactivitystyles.category}>{getTribeName(item.categoryId)}</Text>
    </View>
</TouchableHighlight>      
                    


);
   return (
    <SafeAreaView style={{flex:1}}>

    <View style={{marginTop:10, paddingBottom: 20, backgroundColor: 'white'}}>
    <Text style={{marginTop:30, fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                        Your Tribe is talking 
                      </Text>
                      <Text style={{fontWeight: '100', marginTop: 5, paddingHorizontal: 20, paddingBottom: 20}}>
                        Meet your People
                      </Text>
   <ScrollView  >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={activitysArray}
          renderItem={this.renderFeed}
          keyExtractor={item => `${item.ActivityId}`}
          vertical
        />
      </ScrollView>
      <Text style={{marginTop:30, fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                        Your Tribe is Learning
                      </Text>
                      <Text style={{fontWeight: '100', marginTop: 5, paddingHorizontal: 20, paddingBottom: 20}}>
                        Learn from your People
                      </Text>
      <ScrollView  >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={activitysArray}
          renderItem={this.renderLearningResources}
          keyExtractor={item => `${item.ActivityId}`}
          vertical
        />
      </ScrollView>
      <Text style={{marginTop:30, fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                        Services
                      </Text>
                      <Text style={{fontWeight: '100', marginTop: 5, paddingHorizontal: 20, paddingBottom: 20}}>
                        Services in your tribe
                      </Text>
      <ScrollView>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={activitysArray}
          renderItem={this.renderHelpResources}
          keyExtractor={item => `${item.ActivityId}`}
          vertical
        />
      </ScrollView>
    </View>

    </SafeAreaView>

    ); 

  }
