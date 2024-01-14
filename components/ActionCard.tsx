import { StyleSheet, Text, View,Linking, Image , TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink : String){
        Linking.openURL(websiteLink.toString())
    }
  return (
    <View>
      <Text style = {styles.headingText}>Blog Card</Text>
      <View style = {[styles.card , styles.elevatedCard]} ></View>
      <View style = {styles.headingContainer}>
        <Text style = {styles.headerText}>
            What's new in javascript 21 
        </Text>
      </View>
      <Image
      source={{
        uri : 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=600'
      }}
      style = {styles.cardImage}
      />
      <View style = {styles.bodycontainer} >
        <Text numberOfLines={3}>Recently, I have to write a program which, when I have received 5 values in my 
            document.write, the program has to start on a new line. I searched on multiple things 
            on the internet and I found nothing about it. Here I show you how to deal with it. 
            Hope it can help you!</Text>
      </View>
      <View style = {styles.footercontainer} >
        <TouchableOpacity onPress={() => openWebsite('https://www.google.com/imgres?imgurl=https%3A%2F%2Fcode.visualstudio.com%2Fassets%2Fdocs%2Flanguages%2Fjavascript%2Foverview.png&tbnid=2beJ_ZIdzTYOYM&vet=12ahUKEwiE5a7Z6tyDAxWnZGwGHT96Bo8QMygBegQIARBv..i&imgrefurl=https%3A%2F%2Fcode.visualstudio.com%2Fdocs%2Flanguages%2Fjavascript&docid=QhoSJXNEAUkjMM&w=1873&h=1126&itg=1&q=javascript&ved=2ahUKEwiE5a7Z6tyDAxWnZGwGHT96Bo8QMygBegQIARBv ')}>
            <Text> Read More ...</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText :{
      fontSize : 24 ,
      fontWeight : 'bold',
      paddingHorizontal : 8 ,
    },
    card : {
      width : 350,
      height : 24,
      borderRadius : 6,
      marginVertical : 12,
      marginHorizontal : 16 ,
    },
    elevatedCard : {
    },
    headingContainer : {},
    headerText : {},
    cardImage : {
        height : 100,
    },
    bodycontainer : {},
    footercontainer : {},

})