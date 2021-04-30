import React,{Component} from "react"
import {Text,View,TouchableOpacity,TextInput} from "react-native"
import firebase from 'firebase'

export default class HomeScreen extends Component{

  render(){
    return(
      <View style = {{flex:1,backgroundColor:"purple"}}>
      <View style ={{flexDirection:'row'}}>
        <TextInput style = {{marginTop:50,marginLeft:50,width:200,backgroundColor:'red'}} type='text' placeholder={'search'}/>
        <TouchableOpacity style = {{marginTop:50,width:70,height:30,backgroundColor:'gray'}}><Text>search</Text></TouchableOpacity> 
      </View></View>
    );
  }
}