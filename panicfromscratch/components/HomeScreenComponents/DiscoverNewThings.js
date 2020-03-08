import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import StarRating from 'react-native-star-rating'

export default class DiscoverNewThings extends Component {
    render() {
        return (
            
                <View style= {{width:this.props.width/2-30, height: this.props.width/2-30, borderWidth:0.5, borderColor: "#dddddd"}}>
                    <View style= {{flex: 1}} >
                    <Image 
                    style={{flex: 1,height:null,width:null, resizeMode:'cover'}}
                    source={require('/Users/chege/Desktop/Tribe/panicfromscratch/assets/3.png')}
                    />
                    </View>
                    <View style= {{flex: 1, alignItems: 'flex-start', paddingLeft: 10, justifyContent: 'space-evenly'}}>
                    <Text style={{fontSize: 10,color: '#b63838'}}>{this.props.type}</Text>
                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>{this.props.name}</Text>
                    <Text style={{fontSize: 10}}>{this.props.price}$</Text>
                    <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={this.props.rating}
                        starSize={10}
                    />
                    </View> 
                </View>   
        )
    }
}
