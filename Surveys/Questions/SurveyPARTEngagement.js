//Surveys/SurveyPARTEngagement
//
// Survey for start of lab session.
// props setter gives array of answers when updated. 
//

import React, { useEffect, useState, useRef } from "react";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,	
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  TextInput,
  TextStyle,	
  Image,
} from "react-native";

import LikertQ5 from '../Questions/LikertQ5';

function SurveyPARTEngagement(props){

const [E0, setE0] = useState(null);
const [E1, setE1] = useState(null);
const [E2, setE2] = useState(null);
const [E3, setE3] = useState(null);
const [E4, setE4] = useState(null);
const [E5, setE5] = useState(null);
const [E6, setE6] = useState(null);
const [E7, setE7] = useState(null);
const [E8, setE8] = useState(null);
const [E9, setE9] = useState(null);
const [E10, setE10] = useState(null);
const [E11, setE11] = useState(null);
  
    useEffect(() => {
      props.setter([
                'E0', E0,
                'E1', E1,
                'E2', E2,
                'E3', E3,
                'E4', E4,
                'E5', E5,
                'E6', E6,
                'E7', E7,
                'E8', E8,
                'E9', E9,
                'E10', E10,
                'E11', E11
                      ]);
    }, [E0, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11]);

    const renderItem = ({ item }) => {
      return(     
      <LikertQ5 setter={item.setter} text={item.text} lowText="disagree" highText="agree"/>
    )};

    return (
  <>
            <View style={{width:"100%", padding:5, paddingTop:40, alignItems:'flex-start'}}>
        <Text style={{fontWeight:'bold'}}>Rate the following from Strongly agree to Strongly Agree (Strongly disagree/Disagree/Neither agree or disagree/Agree/Strongly agree):</Text>
            </View>

      <FlatList
    data={[
      {setter: setE0, text: "I lost myself in this experience."},
      {setter: setE1, text: "The time I spent playing just slipped away."},
      {setter: setE2, text: "I was absorbed in this experience."},
      {setter: setE3, text: "I felt frustrated while playing"},
      {setter: setE4, text: "I found this videogame confusing to use."},
      {setter: setE5, text: "Playing this videogame was taxing."},
      {setter: setE6, text: "This videogame was attractive."},
      {setter: setE7, text: "This videogame was aesthetically appealing."},
      {setter: setE8, text: "This videogame appealed to my senses."},
      {setter: setE9, text: "Playing videogame was worthwhile."},
      {setter: setE10, text: "My experience was rewarding."},
      {setter: setE11, text: "I felt interested in this experience."}
    ]}
    renderItem={renderItem}
      />

  </>
    );
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: "center",
    color: "#656565",
  },
  container: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    flex:1,
    flexDirection:'row',
    height: 75,
    padding: 5,
    borderRadius:5,
    borderColor:'gray',
    borderWidth:0,
    justifyContent: 'center'
  },
});

export default React.memo(SurveyPARTEngagement);
