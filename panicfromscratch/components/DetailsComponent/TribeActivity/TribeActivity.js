import React from 'react';
import {FlatList,Text,View,TouchableHighlight,Image} from 'react-native';
import tribeactivitystyles from './tribeactivitystyles';
import { getActivitys, getTribeName } from '../../data/MockDataAPI';




export default function TribeActivity({ route, navigation }) {

 const { tribedata } = route.params;
   
  const activitysArray = getActivitys(tribedata.id);

  onPressActivity = item => {
    navigation.navigate("Activity", { tribesdata });
  };

  renderActivitys = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressActivity(item)}>
      <View style={tribeactivitystyles.container}>
        <Image style={tribeactivitystyles.photo} source={{ uri: item.photo_url }} />
        <Text style={tribeactivitystyles.title}>{item.title}</Text>
        <Text style={tribeactivitystyles.category}>{getTribeName(item.categoryId)}</Text>
      </View>
      
    </TouchableHighlight>

    
  );

   
   return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={activitysArray}
          renderItem={this.renderActivitys}
          keyExtractor={item => `${item.ActivityId}`}
        />
      </View>
    ); 

  }
