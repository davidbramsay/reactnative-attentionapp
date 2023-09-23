//Surveys/TestSessStartSurvey
//
// Survey for start of lab session.
// OnSubmitted returns array of question followed by answer
//
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


import EmpaticaCue from '../Surveys/Questions/EmpaticaCue';
import ChecklistItem from '../Surveys/Questions/ChecklistItem';
import RecordingCue from '../Surveys/Questions/RecordingCue';
import SurveyPARTEmotion from '../Surveys/Questions/SurveyPARTEmotion';

import FreeQ from '../Surveys/Questions/FreeQ';

function TestSessStartSurvey(props){

    const [empaticaTime, setEmpaticaTime] = useState("");	
    const [recordingTime, setRecordingTime] = useState("");	
    const [dt, setDt] = useState(new Date().toLocaleString());
    const [emotionResults, setEmotionResults] = useState([]);	
    const [freeActivity, setFreeActivity] = useState('');	
    const [freeNotes, setFreeNotes] = useState('');	

    useEffect(() => {
	    let secTimer = setInterval( () => {
	      setDt(new Date().toLocaleString())
	    },1000)

	    return () => clearInterval(secTimer);
    }, []);	

    const renderItem = ({ item }) => {
	    if (item.type=='text'){
		return(	    
		     <>	
		     <Text style={{textAlign:'center'}}> {item.text} </Text>
		     <View style={{padding:10}}/>
		     </>	
	        )
	    } else if (item.type=='section'){
		return(	    
		    <View style={{width:"100%", paddingTop:40, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
			    <Text style={{fontWeight:'bold', padding:15}}> {item.text}</Text>
		    </View>
	        )
	    } else if (item.type=='checklist'){
		return(	    
		    <ChecklistItem boldtext={item.boldtext} text={item.text}/>
	        )
	    } else if (item.type=='empaticacue'){
		return(	    
	       	    <EmpaticaCue start={true} setter={setEmpaticaTime}/>
	        )
	    } else if (item.type=='recordingcue'){
		return(	    
	       	    <RecordingCue setter={setRecordingTime}/>
	        )
	    } else if (item.type=='surveypartemotion'){
		return(	    
		    <SurveyPARTEmotion shorten={false} setter={setEmotionResults}/>
	        )
	    } else if (item.type=='submit'){
		return(	    
		    <>	
		    <FreeQ text="What activity are you doing?" val={freeActivity} setter={setFreeActivity}/>
		    <FreeQ text="Where, notes about environment, other important notes?" val={freeNotes} setter={setFreeNotes}/>

		    <Text style={{textAlign:'center'}}> The time is now:</Text>

		    <View style={{width:"100%", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
			    <Text style={{fontWeight:'bold', padding:15}}> {dt} </Text>
		    </View>

		    <View style={{...styles.separator, padding:20}} />

		    <View style={{width:'100%', height:50, padding:5, justifyContent:'center', alignItems:'center'}}>
		    <TouchableOpacity
		    activeOpacity={0.5}
		    onPress={() => {props.onSubmitted([
				'empaticaStartTime', empaticaTime,
				...emotionResults,
				'recordingStartTime', recordingTime,
				'LastSeenTimeStartSurvey', dt,
				'freeActivity', freeActivity,
				'freeNotes', freeNotes
			    ], false);}}>
			<Text style={{width:'100%', padding:10, paddingTop:5, height: 30, borderColor: '#7a42f4', 
				      borderWidth: 1, textAlign:'center', alignItems:'center', justifyContent:'center'}}>
			    Start Activity
			</Text>
		    </TouchableOpacity>
		    </View>
		    </>	
		)
	    }
    };

    return (
	<>
	    <View style={{width:"100%", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
		    <Text style={{fontWeight:'bold', padding:15}}> Test Session Intro Survey</Text>
	    </View>

	    <Text style={{padding:10}}></Text>

	    <FlatList
		data={[
		    {type:"text", text:"This is a test session for an activity of your choice."},
		    {type:"surveypartemotion"},	
		    {type:"empaticacue"},
		    {type:"recordingcue"},			
		    {type:"text", text:""},
		    {type:"submit"}]}
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

export default React.memo(TestSessStartSurvey);
