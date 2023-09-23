//Surveys/SurveyPARTSenseControlScale
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

import LikertQ from '../Questions/LikertQ';

function SurveyPARTSenseControlScale(props){

const [SCS0, setSCS0] = useState(null);
const [SCS1, setSCS1] = useState(null);
const [SCS2, setSCS2] = useState(null);
const [SCS3, setSCS3] = useState(null);
const [SCS4, setSCS4] = useState(null);
const [SCS5, setSCS5] = useState(null);
const [SCS6, setSCS6] = useState(null);
const [SCS7, setSCS7] = useState(null);
const [SCS8, setSCS8] = useState(null);
const [SCS9, setSCS9] = useState(null);
const [SCS10, setSCS10] = useState(null);
const [SCS11, setSCS11] = useState(null);
	
    useEffect(() => {
	    props.setter([
                'SCS0': SCS0,
                'SCS1': SCS1,
                'SCS2': SCS2,
                'SCS3': SCS3,
                'SCS4': SCS4,
                'SCS5': SCS5,
                'SCS6': SCS6,
                'SCS7': SCS7,
                'SCS8': SCS8,
                'SCS9': SCS9,
                'SCS10': SCS10,
                'SCS11': SCS11
                	    ]);
    }, [SCS0, SCS1, SCS2, SCS3, SCS4, SCS5, SCS6, SCS7, SCS8, SCS9, SCS10, SCS11]);

    const renderItem = ({ item }) => {
      return(	    
	    <LikertQ setter={item.setter} text={item.text} lowText="Strongly agree" highText="Strongly disagree"/>
    )};

    return (
	<>
            <View style={{width:"100%", padding:5, paddingTop:40, alignItems:'flex-start'}}>
		    <Text style={{fontWeight:'bold'}}>Rate the following from Strongly agree to Strongly Agree (Strongly agree/Somewhat agree/A little agree/Neither agree or disagree/A little disagree/Somewhat disagree/):</Text>
            </View>

	    <FlatList
		data={[
      {setter: setSCS0, text: "I can do just about anything I really set my mind to."},
      {setter: setSCS1, text: "When I really want to do something, I usually find a way to succeed at it."},
      {setter: setSCS2, text: "Whether or not I am able to get what I want is in my own hands."},
      {setter: setSCS3, text: "What happens to me in the future mostly depends on me."},
      {setter: setSCS4, text: "There is little I can do to change many of the important things in my life."},
      {setter: setSCS5, text: "I often feel helpless in dealing with the problems of life."},
      {setter: setSCS6, text: "Other people determine most of what I can and cannot do."},
      {setter: setSCS7, text: "What happens in my life is often beyond my control."},
      {setter: setSCS8, text: "There are many things that interfere with what I want to do."},
      {setter: setSCS9, text: "I have little control over the things that happen to me."},
      {setter: setSCS10, text: "There is really no way I can solve the problems I have."},
      {setter: setSCS11, text: "I sometimes feel I am being pushed around in my life."}
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

export default React.memo(SurveyPARTSenseControlScale);
