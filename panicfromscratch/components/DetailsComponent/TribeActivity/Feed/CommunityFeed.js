import React from 'react';
import {FlatList,Text,View,TouchableHighlight,Image,SafeAreaView, ScrollView} from 'react-native';
import { tribes } from '../../../data/dataArrays';
import tribeactivitystyles from '../tribeactivitystyles';
import { getActivitys, getTribeName } from '../../../data/MockDataAPI';
import { useNavigation } from '@react-navigation/native';




export default function CommunityFeed() {

const navigation = useNavigation();

const tribedata = tribes
const activitysArray = getActivitys(tribedata.id);

  onPressActivity = item => {
    navigation.navigate("Activity", { item });
  };

  renderActivitys = ({ item }) => (
    <SafeAreaView style={{flex:1}}>

    <ScrollView  >


        <View style={{marginTop:10, paddingBottom: 20, backgroundColor: 'white'}}>

          
      <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressActivity(item)}>
      <View style={tribeactivitystyles.container}>
        <Image style={tribeactivitystyles.photo} source={{ uri: item.photo_url }} />
        <Text style={tribeactivitystyles.title}>{item.title}</Text>
        <Text style={tribeactivitystyles.category}>{getTribeName(item.categoryId)}</Text>
      </View>
      
    </TouchableHighlight>      
                        
          </View> 
    
    </ScrollView>
    </SafeAreaView>
  );

   
   return (
    <View style={{marginTop:10, paddingBottom: 20, backgroundColor: 'white'}}>
         <Text style={{marginTop:30, fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                        Your People Talk are Talking
                      </Text>
                      <Text style={{fontWeight: '100', marginTop: 5, paddingHorizontal: 20, paddingBottom: 20}}>
                        Meet your People
                      </Text>
          
        <FlatList
          showsVerticalScrollIndicator={false}
          data={activitysArray}
          renderItem={this.renderActivitys}
          keyExtractor={item => `${item.ActivityId}`}
          horizontal={true}
        />
      </View>
    ); 

  }
