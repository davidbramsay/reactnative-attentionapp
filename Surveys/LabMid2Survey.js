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

function LabMid2Survey(props){

    const [scrollEnabled, setScrollEnabled] = useState(true);	
    const [emotionResults, setEmotionResults] = useState([]);	
    const [flowResults, setFlowResults] = useState([]);	
    const [startSurveyTime, setStartSurveyTime] = useState("");	
    const [donePlaying, setDonePlaying] = useState(false);	

    function handleActivityDone(){
	setStartSurveyTime(new Date().toLocaleString());
	setDonePlaying(true);
    }

    return (
	<>
	    {donePlaying ?
	    <>
	    <View style={{width:"100%", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
		    <Text style={{fontWeight:'bold', padding:15}}> Lab Pre-Flow Activity Survey</Text>
	    </View>

	    <ScrollView keyboardShouldPersistTaps='handled' scrollEnabled={scrollEnabled}>


	    <SurveyPARTFlow setScrollEnabled={setScrollEnabled} setter={setFlowResults}/>
	    <SurveyPARTEmotion shorten={true} setter={setEmotionResults}/>

		    <View style={{width:"100%", paddingTop:40, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
			<Image source={require('../icons/traffic-sign.png')}
			    style={{width:'30%', padding:5, height: undefined, aspectRatio:1}}/>
			<Text style={{width:'65%', padding:15, textAlign:'justify'}}>Contact the test administrator who will talk to you about the upcoming task. </Text>
		    </View>
		     <View style={{padding:10}}/>
		    
	    <Text style={{textAlign:'center', padding:10}}> You will now do your flow activity for a short session.  Once you have noticed the light has changed twice, you can end the activity at any time.  Then you'll be asked to fill out a survey.</Text>

	    <View style={{...styles.separator, padding:20}} />

            <View style={{width:'100%', height:50, padding:5, justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {props.onSubmitted([
		        'startSurveyTime', startSurveyTime,	 
		    	...flowResults,
		        ...emotionResults,
		    ], false);}}>
                <Text style={{width:'100%', padding:10, paddingTop:5, height: 30, borderColor: '#7a42f4', 
			      borderWidth: 1, textAlign:'center', alignItems:'center', justifyContent:'center'}}>
                    Start Flow Activity
                </Text>
            </TouchableOpacity>
            </View>

	    </ScrollView>

	   </>:<>
		 <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold', padding:10}}>Continue Playing if you want!</Text>

		 <Text style={{textAlign:'center', padding:10}}> When you're ready to move on, hit the button below. </Text>

		 <View style={{...styles.separator, padding:20}} />

		 <View style={{width:'100%', height:50, padding:5, justifyContent:'center', alignItems:'center'}}>
		 <TouchableOpacity
		 activeOpacity={0.5}
		 onPress={handleActivityDone}>
		 <Text style={{width:'100%', padding:10, paddingTop:5, height: 30, borderColor: '#7a42f4', 
			      borderWidth: 1, textAlign:'center', alignItems:'center', justifyContent:'center'}}>
                    I'm done with the activity!
                 </Text>
                 </TouchableOpacity>

                 </View>
	   </>}

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

export default React.memo(LabMid2Survey);
