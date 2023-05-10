//Surveys/LabMid1Survey
//
// Survey after training period.
//
//

import React, { useEffect, useState, useRef } from "react";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  TextInput,
  TextStyle,	
  Image,
} from "react-native";

import SurveyPARTEmotion from '../Surveys/Questions/SurveyPARTEmotion';
import SurveyPARTFlow from '../Surveys/Questions/SurveyPARTFlow';

function LabMid1Survey(props){

    const [scrollEnabled, setScrollEnabled] = useState(true);	
    const [dt, setDt] = useState(new Date().toLocaleString());
    const [emotionResults, setEmotionResults] = useState([]);	
    const [flowResults, setFlowResults] = useState([]);	

    useEffect(() => {
	    let secTimer = setInterval( () => {
	      setDt(new Date().toLocaleString())
	    },1000)

	    return () => clearInterval(secTimer);
    }, []);	

    return (
	<>
	    <View style={{width:"100%", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
		    <Text style={{fontWeight:'bold', padding:15}}> Lab Pre-Tetris Survey</Text>
	    </View>

	    <ScrollView keyboardShouldPersistTaps='handled' scrollEnabled={scrollEnabled}>

	    <SurveyPARTEmotion shorten={false} setter={setEmotionResults}/>

	    <View style={{width:"100%", paddingTop:40, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
		<Image source={require('../icons/traffic-sign.png')}
		    style={{width:'30%', padding:5, height: undefined, aspectRatio:1}}/>
		<Text style={{width:'65%', padding:15, textAlign:'justify'}}> Contact the test administrator who will talk to you about the upcoming task.</Text>
	    </View>
	     <View style={{padding:10}}/>

	    <Text style={{textAlign:'center', padding:10}}> You will now play tetris for a short session.  Once you have noticed the light has changed twice, you can end the activity at any time.  Then you'll be asked to fill out a survey.</Text>

	    <Text style={{textAlign:'center'}}> The time is now:</Text>

	    <View style={{width:"100%", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
		    <Text style={{fontWeight:'bold', padding:15}}> {dt} </Text>
	    </View>


	    <View style={{...styles.separator, padding:20}} />

            <View style={{width:'100%', height:50, padding:5, justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {props.onSubmitted([
		        ...emotionResults,
			'LastSeenTimeStartSurvey', dt
		    ], false);}}>
                <Text style={{width:'100%', padding:10, paddingTop:5, height: 30, borderColor: '#7a42f4', 
			      borderWidth: 1, textAlign:'center', alignItems:'center', justifyContent:'center'}}>
                    Start Tetris
                </Text>
            </TouchableOpacity>
            </View>


	    </ScrollView>
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

export default React.memo(LabMid1Survey);
